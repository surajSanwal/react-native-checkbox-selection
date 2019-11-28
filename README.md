# react-native-checkbox-selection

> A customizables ListView that allows you to select multiple and single rows.

## Install

Using NPM

```sh
npm install react-native-checkbox-selection
```

```sh

Using Yarn
yarn add react-native-checkbox-selection
```

## Usage

```js
import React, { Component } from "react";
import { View } from "react-native";
import MultiSelectComponent from "react-native-checkbox-selection";

const fruits = ["Apples", "Oranges", "Pears"];
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

class App extends Component {
  state = { selectedFruits: [] };

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits });
  };

  render() {
    return (
      <View>
        <MultiSelectComponent
          data={fruits}
          onSelectedItemsChange={onSelectionsChange}
          selectedItems={this.state.selectedFruits}
          enableTitle
          title={"Select Fruits"}
        />
      </View>
    );
  }
}
export default App;
```

## Properties

| Prop                   |                    Default                     |   Type   | Description                                                                                                  |
| :--------------------- | :--------------------------------------------: | :------: | :----------------------------------------------------------------------------------------------------------- |
| items                  |                       -                        | `array`  | All items available in the list (array of `string` or `{ label, value }`)                                    |
| selectedItems          |                      `[]`                      | `array`  | The currently selected items (array of `string` or `{ label, value }`)                                       |
| onSelectionsChange     |                       -                        |  `func`  | Callback called when a user selects or de-selects an item, passed `(selections, item)`                       |
| keyExtractor           |                    `index`                     |  `func`  | [keyExtractor](https://facebook.github.io/react-native/docs/flatlist.html#keyextractor) for the `FlatList`   |
| checkboxSource         |       [image](images/icon-checkbox.png)        | `object` | [Image source](https://facebook.github.io/react-native/docs/image.html#source) for the checkbox (unchecked). |
| selectedCheckboxSource |   [image](images/icon-checkbox-checked.png)    | `object` | [Image source](https://facebook.github.io/react-native/docs/image.html#source) for the checkbox (checked).   |
| flatListProps          |                       {}                       | `object` | Additional props for the flat list                                                                           |
| style                  | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/scrollview.html#style) for the `FlatList` container.    |
| rowStyle               | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/view.html#style) for the row container.                 |
| checkboxStyle          | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/image.html#style) for the checkbox image.               |
| labelStyle             | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/text.html#style) for the text label.                    |
| selectedRowStyle       | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/view.html#style) for the row container when selected.   |
| selectedCheckboxStyle  | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/image.html#style) for the checkbox image when selected. |
| selectedLabelStyle     | [default styles](src/SelectMultiple.styles.js) | `object` | [Style](https://facebook.github.io/react-native/docs/text.html#style) for the text label when selected.      |
| renderLabel            |                      null                      |  `func`  | Function for render label.                                                                                   |
| maxSelect              |                      null                      |  `int`   | Maximum number of selected items                                                                             |

## License

[ISC](LICENSE) © Suraj Sanwal
