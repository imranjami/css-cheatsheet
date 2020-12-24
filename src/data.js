const background = {
  title: "background",
  id: "background",
  cards: [
    {
      property: "background-image",
      attributes: {
        default: ["none"],
        special: ["url", "linear-gradient"]
      },
      url: "https://www.w3schools.com/css/css_background_image.asp"
    },
    {
      property: "background-attachment",
      attributes: {
        default: ["scroll", "fixed", "local"]
      },
      url: "https://www.w3schools.com/csSref/pr_background-attachment.asp"
    },
    {
      property: "background-size",
      attributes: {
        default: ["auto", "cover", "contain"],
        unit: ["length"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_background-size.asp"
    },
    {
      property: "background-repeat",
      attributes: {
        default: ["repeat", "repeat-x", "repeat-y", "no-repeat"]
      },
      url: "https://www.w3schools.com/cssref/pr_background-repeat.asp"
    },
    {
      property: "background-clip",
      attributes: {
        default: ["border-box", "padding-box", "content-box", "no-clip"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_background-clip.asp"
    },
    {
      property: "background-position",
      attributes: {
        default: [
          "left top",
          "left center",
          "left bottom",
          "right top",
          "right center",
          "right bottom",
          "center top",
          "center center",
          "center bottom"
        ],
        unit: ["x%", "y%", "xpos", "ypos"]
      },
      url: "https://www.w3schools.com/cssref/pr_background-position.asp"
    },
    {
      property: "background-color",
      attributes: {
        default: ["transparent"],
        special: ["color"]
      },
      url: "https://www.w3schools.com/cssref/pr_background-color.asp"
    },
    {
      property: "background-origin",
      attributes: {
        default: ["border-box", "padding-box", "content-box"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_background-origin.asp"
    }
  ]
}

const border = {
  title: "border",
  id: "border",
  cards: [
    {
      property: "border-width",
      attributes: {
        default: ["thin", "medium", "thick"],
        unit: ["length"]
      },
      url: "https://www.w3schools.com/cssref/pr_border-width.asp"
    },
    {
      property: "box-shadow",
      attributes: {
        default: ["inset", "none"],
        unit: ["length"],
        special: ["<color>"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_box-shadow.asp"
    },
    {
      property: "border-color",
      attributes: {
        special: ["<color>"]
      },
      url: "https://www.w3schools.com/css/css_border_color.asp"
    },
    {
      property: "border-style",
      attributes: {
        default: [
          "none",
          "hidden",
          "dotted",
          "dashed",
          "solid",
          "double",
          "groove",
          "ridge",
          "inset",
          "outset"
        ]
      },
      url: "https://www.w3schools.com/cssref/pr_border-style.asp"
    },
    {
      property: "border-radius",
      attributes: {
        default: [
          "border-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-top-left-radius"
        ]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_border-radius.asp"
    }
  ]
}

const box_model = {
  title: "box model",
  id: "boxModel",
  cards: [
    {
      property: "float",
      attributes: {
        default: ["left", "right", "none"]
      },
      url: "https://www.w3schools.com/cssref/pr_class_float.asp"
    },
    {
      property: "height/width",
      attributes: {
        default: ["auto"],
        unit: ["length", "n%"]
      },
      url: "https://www.w3schools.com/cssref/pr_dim_height.asp"
    },
    {
      property: "margin",
      attributes: {
        default: ["auto"],
        unit: ["length", "n%"]
      },
      url: "https://www.w3schools.com/css/css_margin.asp"
    },
    {
      property: "padding",
      attributes: {
        unit: ["length", "n%"]
      },
      url: "https://www.w3schools.com/css/css_padding.asp"
    },
    {
      property: "display",
      attributes: {
        default: ["none", "inline", "block", "inline-block", "flexbox"]
      },
      url: "https://www.w3schools.com/cssref/pr_class_display.asp"
    },
    {
      property: "visibility",
      attributes: {
        default: ["visible", "hidden", "collapse"]
      },
      url: "https://www.w3schools.com/cssref/pr_class_visibility.asp"
    },
    {
      property: "overflow",
      attributes: {
        default: [
          "visible",
          "hidden",
          "scroll",
          "auto",
          "no-display",
          "no-content"
        ]
      },
      url: "https://www.w3schools.com/css/css_overflow.asp"
    },
    {
      property: "clear",
      attributes: {
        default: ["left", "right", "both", "none"]
      },
      url: "https://www.w3schools.com/cssref/pr_class_clear.asp"
    }
  ]
}

const font = {
  title: "font",
  id: "font",
  cards: [
    {
      property: "font-weight",
      attributes: {
        default: ["normal", "bold", "bolder", "lighter"],
        unit: ["NNN"]
      },
      url: "https://www.w3schools.com/cssref/pr_font_weight.asp"
    },
    {
      property: "font-family",
      attributes: {
        default: ["serif", "sans-serif", "monospace", "emoji"]
      },
      url: "https://www.w3schools.com/cssref/pr_font_font-family.asp"
    },
    {
      property: "font-size",
      attributes: {
        default: ["xx-small", "x-small", "small", "medium", "large", "x-large"],
        unit: ["length", "n%"]
      },
      url: "https://www.w3schools.com/cssref/pr_font_font-size.asp"
    },
    {
      property: "font-style",
      attributes: {
        default: ["normal", "italic", "oblique", "inherit"]
      },
      url: "https://www.w3schools.com/cssref/pr_font_font-style.asp"
    }
  ]
}

const text = {
  title: "text",
  id: "text",
  cards: [
    {
      property: "letter-spacing",
      attributes: {
        default: ["normal"],
        unit: ["length", "n%"]
      },
      url: "https://www.w3schools.com/cssref/pr_text_letter-spacing.asp"
    },
    {
      property: "white-space",
      attributes: {
        default: ["normal", "pre", "no-wrap", "pre-wrap", "pre-line"]
      },
      url: "https://www.w3schools.com/cssref/pr_text_white-space.asp"
    },
    {
      property: "text-align",
      attributes: {
        default: ["start", "end", "left", "right", "center", "justify"]
      },
      url: "https://www.w3schools.com/cssref/pr_text_text-align.ASP"
    },
    {
      property: "text-decoration",
      attributes: {
        default: ["none", "underline", "overline", "line-through", "blink"]
      },
      url: "https://www.w3schools.com/cssref/pr_text_text-decoration.asp"
    },
    {
      property: "word-break",
      attributes: {
        default: ["normal", "keep-all", "loose", "break-strict", "break-all"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_word-break.asp"
    },
    {
      property: "text-transform",
      attributes: {
        default: ["none", "capitalize", "uppercase", "lowercase"]
      },
      url: "https://www.w3schools.com/cssref/pr_text_text-transform.asp"
    },
    {
      property: "word-wrap",
      attributes: {
        default: ["normal"],
        unit: ["break-word"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_word-wrap.asp"
    },
    {
      property: "text-shadow",
      attributes: {
        default: ["normal"],
        unit: ["length"],
        special: ["color"]
      },
      url: "https://www.w3schools.com/cssref/css3_pr_text-shadow.asp"
    }
  ]
}

const table = {
  title: "table",
  id: "table",
  cards: [
    {
      property: "border-collapse",
      attributes: {
        default: ["collapse", "separate"]
      },
      url: "https://www.w3schools.com/cssref/pr_border-collapse.asp"
    },
    {
      property: "empty-cells",
      attributes: {
        default: ["show", "hide"]
      },
      url: "https://www.w3schools.com/cssref/pr_tab_empty-cells.asp"
    },
    {
      property: "border-spacing",
      attributes: {
        unit: ["length length"]
      },
      url: "https://www.w3schools.com/cssref/pr_border-spacing.asp"
    },
    {
      property: "table-layout",
      attributes: {
        default: ["auto", "fixed"]
      },
      url: "https://www.w3schools.com/cssref/pr_tab_table-layout.asp"
    },
    {
      property: "caption-side",
      attributes: {
        default: ["top", "bottom", "left", "right"]
      },
      url: "https://www.w3schools.com/cssref/pr_tab_caption-side.asp"
    }
  ]
}

const listMarkers = {
  title: "list + markers",
  id: "listMarkers",
  cards: [
    {
      property: "list-style-type",
      attributes: {
        default: [
          "none",
          "circle",
          "square",
          "upper-roman",
          "lower-alpha",
          "georgian"
        ]
      },
      url: "https://www.w3schools.com/cssref/pr_list-style-type.asp"
    },
    {
      property: "list-style-image",
      attributes: {
        default: ["none"],
        special: ["url"]
      },
      url: "https://www.w3schools.com/cssref/pr_list-style-image.asp"
    },
    {
      property: "list-style-position",
      attributes: {
        default: ["inside", "outside"]
      },
      url: "https://www.w3schools.com/cssref/pr_list-style-position.asp"
    }
  ]
}

const positioning = {
  title: "positioning",
  id: "positioning",
  cards: [
    {
      property: "position",
      attributes: {
        default: ["static", "relative", "absolute", "fixed"]
      },
      url: "https://www.w3schools.com/cssref/pr_class_position.asp"
    },
    {
      property: "clip",
      attributes: {
        default: ["shape", "auto"]
      },
      url: "https://www.w3schools.com/cssref/pr_pos_clip.asp"
    },
    {
      property: "z-index",
      attributes: {
        default: ["auto"],
        unit: ["number"]
      },
      url: "https://www.w3schools.com/cssref/pr_pos_z-index.asp"
    },
    {
      property: "top/right/bottom/left",
      attributes: {
        default: ["auto"],
        unit: ["n%", "length"]
      },
      url: "https://www.w3schools.com/cssref/pr_pos_top.asp"
    }
  ]
}

const data = [
  background,
  border,
  box_model,
  font,
  text,
  table,
  listMarkers,
  positioning
]

export default data
