import { parseArgs } from 'jsr:@std/cli/parse-args'
import { complexModifications, layer, map, rule, writeToProfile } from 'https://deno.land/x/karabinerts@1.31.0/deno.ts'
import { LayerKeyParam } from 'https://deno.land/x/karabinerts@1.31.0/index.ts'

const title = 'Multi-Layered Keymap for Japanese Keyboards: Cursor, Mouse, NumPad, Web Browser, etc.'
const maintainers = ['susumuota']

// for Japanese keyboards
const layer1KeyCode: LayerKeyParam = 'japanese_eisuu'
const layer1Label = '英数'
const layer2KeyCode: LayerKeyParam = 'japanese_kana'
const layer2Label = 'かな'

const mouseSpeed = 2000
const wheelSpeed = 50

const createMods = (
  layer1KeyCode: LayerKeyParam,
  layer1Label: string,
  layer2KeyCode: LayerKeyParam,
  layer2Label: string,
  mouseSpeed: number,
  wheelSpeed: number,
) => {
  return complexModifications([
    // Layer 1
    layer(layer1KeyCode, `1: [Cursor] ${layer1Label} + i, j, k, l to ↑, ←, ↓, →`).manipulators([
      map('i').to('↑'),
      map('j').to('←'),
      map('k').to('↓'),
      map('l').to('→'),
    ]),
    layer(layer1KeyCode, `1: [Cursor] ${layer1Label} + h, n, y, p to PageUp, PageDown, Home, End`).manipulators([
      map('h').to('page_up'),
      map('n').to('page_down'),
      map('y').to('home'),
      map('p').to('end'),
    ]),
    layer(layer1KeyCode, `1: [Cursor] ${layer1Label} + u, o to ⌥ + ←, → (Word Backward, Forward)`).manipulators([
      map('u').to('←', '<⌥'),
      map('o').to('→', '<⌥'),
    ]),
    layer(layer1KeyCode, `1: [Mouse] ${layer1Label} + e, s, d, f to Mouse ↑, ←, ↓, →`).manipulators([
      map('e').toMouseKey({ y: -1 * mouseSpeed }),
      map('s').toMouseKey({ x: -1 * mouseSpeed }),
      map('d').toMouseKey({ y: mouseSpeed }),
      map('f').toMouseKey({ x: mouseSpeed }),
    ]),
    layer(layer1KeyCode, `1: [Mouse] ${layer1Label} + g, b to Mouse Wheel ↑, ↓`).manipulators([
      map('g').toMouseKey({ vertical_wheel: wheelSpeed }),
      map('b').toMouseKey({ vertical_wheel: -1 * wheelSpeed }),
    ]),
    layer(layer1KeyCode, `1: [Mouse] ${layer1Label} + x, v to Mouse Button 1, 2`).manipulators([
      map('x').toPointingButton('button1'),
      map('v').toPointingButton('button2'),
    ]),
    layer(layer1KeyCode, `1: [Web Browser] ${layer1Label} + w, r to ⌘ + ←, → (Page Backward, Forward)`).manipulators([
      map('w').to('←', '⌘'),
      map('r').to('→', '⌘'),
    ]),
    layer(layer1KeyCode, `1: [Web Browser] ${layer1Label} + q, t to ⌃⇧ + ⇥, ⌃ + ⇥ (Switch Tabs)`).manipulators([
      map('q').to('⇥', '<⌃⇧'),
      map('t').to('⇥', '<⌃'),
    ]),
    // deno-fmt-ignore
    layer(layer1KeyCode, `1: [Mission Control] ${layer1Label} + m, comma, period to ⌃ + ←, ↑, → (Switch Desktops)`).manipulators([
      map('m').to('←', '<⌃'),
      map(',').to('↑', '<⌃'),
      map('.').to('→', '<⌃'),
    ]),
    // layer 2
    layer(layer2KeyCode, `2: [NumPad] ${layer2Label} + nm,.jkluiop to Keypad 01234567890`).manipulators([
      map('n').to('keypad_0'),
      map('m').to('keypad_1'),
      map(',').to('keypad_2'),
      map('.').to('keypad_3'),
      map('j').to('keypad_4'),
      map('k').to('keypad_5'),
      map('l').to('keypad_6'),
      map('u').to('keypad_7'),
      map('i').to('keypad_8'),
      map('o').to('keypad_9'),
      map('p').to('keypad_0'),
    ]),
    layer(layer2KeyCode, `2: [NumPad] ${layer2Label} + qwertyuiop to Keypad 1234567890`).manipulators([
      map('q').to('keypad_1'),
      map('w').to('keypad_2'),
      map('e').to('keypad_3'),
      map('r').to('keypad_4'),
      map('t').to('keypad_5'),
      map('y').to('keypad_6'),
      map('u').to('keypad_7'),
      map('i').to('keypad_8'),
      map('o').to('keypad_9'),
      map('p').to('keypad_0'),
    ]),
    layer(layer2KeyCode, `2: [NumPad] ${layer2Label} + slash, semicolon to Keypad period, comma`).manipulators([
      map('/').to('keypad_period'),
      map(';').to('keypad_comma'),
    ]),
    layer(layer2KeyCode, `2: [NumPad] ${layer2Label} + v, f, c, d, s to Keypad +, -, *, /, =`).manipulators([
      map('v').to('keypad_plus'),
      map('f').to('keypad_hyphen'),
      map('c').to('keypad_asterisk'),
      map('d').to('keypad_slash'),
      map('s').to('keypad_equal_sign'),
    ]),
    // Layer 0
    rule('Layer - 0: [Optional] Right ⌘ to Backspace').manipulators([
      map('>⌘').to('⌫'),
    ]),
  ])
}

const main = () => {
  const flags = parseArgs(Deno.args, {
    boolean: ['help', 'writeToProfile'],
    default: { help: false, writeToProfile: false },
  })

  if (flags.help) {
    console.log(`${title}

Usage:
    deno run karabiner-multi-layered.ts [options]

Options:
    --help              Show this help message
    --writeToProfile    Write to Karabiner profile (needs --allow-env --allow-read --allow-write)
`)
    Deno.exit(0)
  }

  const mods = createMods(layer1KeyCode, layer1Label, layer2KeyCode, layer2Label, mouseSpeed, wheelSpeed)

  if (flags.writeToProfile) {
    writeToProfile('Default profile', mods.rules, mods.parameters)
  } else {
    console.log(JSON.stringify({ title: title, maintainers: maintainers, rules: mods.rules }, null, '  '))
  }
}

main()
