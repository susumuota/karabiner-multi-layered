# Multi-Layered Keymap for Japanese Keyboards: Cursor, Mouse, NumPad, Web Browser, etc.

This is a [Karabiner-Elements](https://karabiner-elements.pqrs.org/) complex modification for Japanese keyboards. It provides a multi-layered keymap that allows you to use the same keys for different functions depending on the layer you are in.

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
- Run the following command to re-generate the JSON file.

```shell
deno task json
```

- To develop the Karabiner-Elements, run the following command.

```shell
deno task dev
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Authors

Susumu Ota
