const primaryColor = "#0d8a72";
const dangerColor = "#f44336";
const roseColor = "#e91e63";
const grayColor = "#999999";

const hexColorToRGB = function (hexColor) {
    let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000
    hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff
    return hex_array
      ? {
          r: parseInt(hex_array[1], 16), // 0-255
          g: parseInt(hex_array[2], 16), // 0-255
          b: parseInt(hex_array[3], 16), // 0-255
        }
      : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
    let rgb = hexColorToRGB(hexColor);
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const customCheckboxRadioSwitch = {
    checkRoot: {
        padding: "9px",
        "&:hover": {
            backgroundColor: hexToRGBAlpha(primaryColor, 0.04) + "!important",
        },
    },
    radioRoot: {
        padding: "9px",
        "&:hover": {
            backgroundColor: hexToRGBAlpha(primaryColor, 0.04) + "!important",
        },
    },
    labelRoot: {
        marginLeft: "-14px",
    },
    checkboxAndRadio: {
        position: "relative",
        display: "block",
        marginTop: "10px",
        marginBottom: "10px",
    },
    checkboxAndRadioHorizontal: {
        position: "relative",
        display: "block",
        "&:first-child": {
            marginTop: "10px",
        },
        marginTop: "0",
        marginBottom: "0",
    },
    checked: {
        color: primaryColor + "!important",
        },
        checkedIcon: {
            width: "20px",
            height: "20px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "3px",
        },
        uncheckedIcon: {
            width: "0px",
            height: "0px",
            padding: "9px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "3px",
        },
        disabledCheckboxAndRadio: {
            opacity: "0.45",
        },
        label: {
            cursor: "pointer",
            paddingLeft: "0",
            color: "rgba(0, 0, 0, 0.26)",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            display: "inline-flex",
            transition: "0.3s ease all",
            letterSpacing: "unset",
        },
        labelHorizontal: {
            color: "rgba(0, 0, 0, 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingTop: "39px",
            marginRight: "0",
            "@media (min-width: 992px)": {
                float: "right",
            },
        },
        labelHorizontalRadioCheckbox: {
            paddingTop: "22px",
        },
        labelLeftHorizontal: {
            color: "rgba(0, 0, 0, 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingTop: "22px", 
            marginRight: "0",
        },
        labelError: {
            color: dangerColor,
        },
        radio: {
            color: primaryColor + "!important",
        },
        radioChecked: {
            width: "16px",
            height: "16px",
            border: "1px solid " + primaryColor,
            borderRadius: "50%",
        },
        radioUnchecked: {
            width: "0px",
            height: "0px",
            padding: "7px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "50%",
        },
        inlineChecks: {
            marginTop: "8px",
        },
        iconCheckbox: {
            height: "116px",
            width: "116px",
            color: grayColor,
            "& > span:first-child": {
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: "#CCCCCC",
                textAlign: "center",
                verticalAlign: "middle",
                borderRadius: "50%",
                color: "inherit",
                margin: "0 auto 20px",
                transition: "all 0.2s",
            },
            "&:hover": {
                color: roseColor,
                "& > span:first-child": {
                borderColor: roseColor,
                },
            },
        },
        iconCheckboxChecked: {
            color: roseColor,
            "& > span:first-child": {
                borderColor: roseColor,
            },
        },
        iconCheckboxIcon: {
            fontSize: "40px",
            lineHeight: "111px",
        },
        switchBase: {
            color: primaryColor + "!important",
        },
        switchIcon: {
            boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
            color: "#FFFFFF !important",
            border: "1px solid rgba(0, 0, 0, .54)",
        },
        switchBar: {
            width: "30px",
            height: "15px",
            backgroundColor: "rgb(80, 80, 80)",
            borderRadius: "15px",
            opacity: "0.7!important",
        },
        switchChecked: {
            "& + $switchBar": {
                backgroundColor: "rgba(156, 39, 176, 1) !important",
            },
            "& $switchIcon": {
                borderColor: "#9c27b0",
            },
        },
        switchRoot: {
            height: "48px",
        },
    };

export default customCheckboxRadioSwitch;