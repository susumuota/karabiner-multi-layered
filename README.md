# Multi-Layered Keymap for Japanese Keyboards: Cursor, Mouse, NumPad, Web Browser, etc.

This is a [Karabiner-Elements](https://karabiner-elements.pqrs.org/) complex modification for Japanese keyboards. It provides a multi-layered keymap that allows you to use the same keys for different functions depending on the layer you are in.

- Layer 1: Modifier: 英数 (`japanese_eisu`), Functions: Cursor, Mouse, Web Browser, Mission Control.

  <img src="https://github.com/user-attachments/assets/610fac79-ede7-4895-8601-b5da5d9b6b79" width="800" alt="Layer1">

- Layer 2: Modifier: かな (`japanese_kana`), Functions: NumPad.

  <img src="https://github.com/user-attachments/assets/276149fb-370f-41a6-8b27-3b5288998157" width="800" alt="Layer2">

- Rules.

  <img src="https://github.com/user-attachments/assets/0b99ec82-c42c-454a-a326-0db4ed58cc10" width="800" alt="rules">

## Install

- Open `Karabiner-Elements Settings`.
- Go to the `Complex Modifications` tab.
- Click on `Add predefined rule`.
- Click on `Import more rules from the Internet (Open a web browser)`.
- Search for `multi-layered-japanese` and click on `Import`. Or just click on [this link](https://ke-complex-modifications.pqrs.org/?q=multi-layered-japanese).
- Click on `Open Karabiner-Elements`.
- Go back to the `Complex Modifications` tab.
- Click on `Import`.
- Scroll down to the `multi-layered-japanese` section and click on `Enable All`.

## Development

- [Install Deno](https://docs.deno.com/runtime/getting_started/installation/).
- Clone this repository.

```shell
git clone https://github.com/susumuota/karabiner-multi-layered.git
cd karabiner-multi-layered
```

- Edit the [karabiner-multi-layered.ts](karabiner-multi-layered.ts).
- Run the following command to re-generate the JSON file. This will create a new `karabiner-multi-layered.json` file. Copy this file to `~/.config/karabiner/assets/complex_modifications/`.

```shell
deno task json
```

- Or run the following command to tweak the keymap continuously. This will watch for changes in the `karabiner-multi-layered.ts` file and update the `Default profile` of Karabiner-Elements automatically.

```shell
deno task dev
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Authors

Susumu Ota
