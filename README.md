# substrate

![An image that shows the result of the algorithm](https://raw.githubusercontent.com/technologiestiftung/citylab-plotter/master/graphics/generators/node/substrate/docs/substrate.png)

```plain
_    |_  _ _|_ __ _ _|_ _
_> |_||_)_>  |_ | (_| |_(/_

based on http://www.complexification.net/gallery/machines/substrate/
by Jared S Tarbell @jaredtarbell

written for CityLAB Berlin
by Fabian Morón Zirfas @fabianmoronzifas
```

## Installation

```bash
npm install @tsb/substrate -g
```

## Usage 

```bash

  Usage:
    $ substrate input [flags]
    $ substrate path/to/outfile.svg --duration 60
    $ substrate path/to/outfile.svg --duration 60 --width 841 --height 1149
    $ substrate path/to/outfile.svg --duration 60 --width 841 --height 1149 --maxcracks 200

  Flags:
    --duration  -d {string} Duration tu run the substrate in seconds. Default: 60
    --height    -h {string} Height of the output svg. Default: 1189 (A0 if 1px === 1mm)
    --width     -w {string} Width of the output svg. Default: 841 (A0 if 1px === 1mm)
    --maxcracks -m {string} Maximum number of cracks computed in parallel. Default: 200
```

## Related

- [Original Page of the Artwork by Jared S Tarbell on www.complexification.net](http://www.complexification.net/gallery/machines/substrate/)

## License

Copyright (c) 2019 Technologiestiftung Berlin & Fabian Morón Zirfas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
