import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import Icon from "react-native-vector-icons/FontAwesome";

const getSelectedItemsNames = (selectedItems = [], data) => {
  return selectedItems
    .reduce((arr, item) => {
      let filter = data.find((it) => it.value === item.value);
      arr.push(filter && filter.label);
      return arr;
    }, [])
    .join(", ");
};

const MultiSelectComponent = (props) => {
  let [showSelect, updateSelect] = useState(props.enableTitle ? false : true);
  let selectedItems = getSelectedItemsNames(
    props.selectedItems || [],
    props.data
  );
  return (
    <View style={props.containerStyle}>
      {props.enableTitle ||
        (selectedItems.length && (
          <TouchableOpacity
            style={styles.styleInputGroup}
            onPress={() => updateSelect(!showSelect)}
          >
            <Text
              numberOfLines={1}
              style={[styles.styleTextDropdown, props.styleTextDropdown]}
            >
              {selectedItems || props.title}
            </Text>
            {!props.iconDisabled && (
              <Icon name={icon || "caret-down"} size={20} />
            )}
          </TouchableOpacity>
        ))}
      <SelectMultiple
        items={props.data}
        ref={props.ref}
        keyExtractor={(item) => item.value}
        onSelectionsChange={(items) => {
          if (props.single) {
            !props.disableAutoClose && updateSelect(false);
            props.onSelectedItemsChange(
              items.length ? [items[items.length - 1]] : []
            );
            return;
          }
          props.onSelectedItemsChange(items);
        }}
        selectedItems={props.selectedItems}
        rowStyle={styles.searchInputStyle}
        labelStyle={styles.styleTextDropdown}
        style={{
          display: showSelect ? "flex" : "none"
        }}
        checkboxSource={props.checkboxSource}
        selectedCheckboxSource={props.selectedCheckboxSource}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  styleInputGroup: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  searchInputStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  styleItemsContainer: {
    backgroundColor: "black"
  },
  styleTextDropdown: {
    color: "black",
    fontSize: 18,
    marginBottom: 10
  },
  styleDropdownMenuSubsection: {
    backgroundColor: "transparent",
    borderBottomColor: "black"
  }
});

MultiSelectComponent.propTypes = {
  data: PropTypes.array.isRequired,
  ref: PropTypes.func,
  onSelectedItemsChange: PropTypes.func,
  selectedItems: PropTypes.array.isRequired,
  selectText: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
  onChangeInput: PropTypes.func,
  buttonText: PropTypes.string,
  selectRef: PropTypes.object,
  single: PropTypes.bool,
  disableAutoClose: PropTypes.bool,
  iconDisabled: PropTypes.bool,
  title: PropTypes.string,
  enableTitle: PropTypes.string,
  icon: PropTypes.string
};

export default MultiSelectComponent;
