# Tabs Component

An accessible tabs component with keyboard navigation support, following ARIA best practices.

## Features

- **Horizontal and Vertical orientations** - Configure via `tabs_direction` parameter
- **Keyboard Navigation** - Full keyboard accessibility support
- **ARIA Compliant** - Follows WAI-ARIA Authoring Practices for tabs pattern
- **Auto-generated IDs** - Unique IDs for each tab panel
- **Customizable** - Support for utility classes and custom attributes

## Usage

### Basic Example

```twig
{% include '@edw_paragraphs_tabs/tabs/tabs.twig' with {
  tabs_tabs: [
    {
      title: 'Tab 1',
      content: '<p>Content for tab 1</p>'
    },
    {
      title: 'Tab 2',
      content: '<p>Content for tab 2</p>'
    },
    {
      title: 'Tab 3',
      content: '<p>Content for tab 3</p>'
    }
  ]
} %}
```

## CSS Variables

### Tabs Container

| Global Variable   | Local Variable     | Default Value | Description                         |
| ----------------- | ------------------ | ------------- | ----------------------------------- |
| `--comp-tabs_c`   | `--_comp-tabs_c`   | -             | Text color for tabs container       |
| `--comp-tabs_bg`  | `--_comp-tabs_bg`  | -             | Background color for tabs container |
| `--comp-tabs_p-i` | `--_comp-tabs_p-i` | -             | Padding inline for tabs container   |
| `--comp-tabs_p-b` | `--_comp-tabs_p-b` | -             | Padding block for tabs container    |
| `--comp-tabs_m-b` | `--_comp-tabs_m-b` | -             | Margin block for tabs container     |
| `--comp-tabs_m-i` | `--_comp-tabs_m-i` | -             | Margin inline for tabs container    |

### Tabs Navigation

| Global Variable       | Local Variable         | Default Value   | Description                                                                  |
| --------------------- | ---------------------- | --------------- | ---------------------------------------------------------------------------- |
| `--comp-tabs_nav_f-d` | `--_comp-tabs_nav_f-d` | `row`           | Flex direction for tabs navigation (row for horizontal, column for vertical) |
| `--comp-tabs_nav_p`   | `--_comp-tabs_nav_p`   | `0px`           | Padding for tabs navigation                                                  |
| `--comp-tabs_nav_m`   | `--_comp-tabs_nav_m`   | `0px`           | Margin for tabs navigation                                                   |
| `--comp-tabs_nav_g`   | `--_comp-tabs_nav_g`   | `2px`           | Gap between tab buttons                                                      |
| `--comp-tabs_nav_b`   | `--_comp-tabs_nav_b`   | Combined border | Border for tabs navigation (shorthand)                                       |
| `--comp-tabs_nav_b-c` | `--_comp-tabs_nav_b-c` | `#ccc`          | Border color for tabs navigation                                             |
| `--comp-tabs_nav_b-w` | `--_comp-tabs_nav_b-w` | `1px`           | Border width for tabs navigation                                             |
| `--comp-tabs_nav_b-s` | `--_comp-tabs_nav_b-s` | `solid`         | Border style for tabs navigation                                             |

### Tab Buttons

| Global Variable              | Local Variable                | Default Value              | Description                               |
| ---------------------------- | ----------------------------- | -------------------------- | ----------------------------------------- |
| `--comp-tabs_button_c`       | `--_comp-tabs_button_c`       | `#444`                     | Text color for tab buttons                |
| `--comp-tabs_button_c_h`     | `--_comp-tabs_button_c_h`     | `#080808`                  | Text color for tab buttons on hover       |
| `--comp-tabs_button_c_a`     | `--_comp-tabs_button_c_a`     | `#fff`                     | Text color for active tab button          |
| `--comp-tabs_button_bg`      | `--_comp-tabs_button_bg`      | `transparent`              | Background color for tab buttons          |
| `--comp-tabs_button_bg_h`    | `--_comp-tabs_button_bg_h`    | Same as bg                 | Background color for tab buttons on hover |
| `--comp-tabs_button_bg_a`    | `--_comp-tabs_button_bg_a`    | `#005c99`                  | Background color for active tab button    |
| `--comp-tabs_button_p-i`     | `--_comp-tabs_button_p-i`     | `1em`                      | Padding inline for tab buttons            |
| `--comp-tabs_button_p-b`     | `--_comp-tabs_button_p-b`     | `.625rem`                  | Padding block for tab buttons             |
| `--comp-tabs_button_f-w`     | `--_comp-tabs_button_f-w`     | `500`                      | Font weight for tab buttons               |
| `--comp-tabs_button_f-s`     | `--_comp-tabs_button_f-s`     | `inherit`                  | Font size for tab buttons                 |
| `--comp-tabs_button_t-d`     | `--_comp-tabs_button_t-d`     | `none`                     | Text decoration for tab buttons           |
| `--comp-tabs_button_b-s-c_h` | `--_comp-tabs_button_b-s-c_h` | `#00abf1`                  | Box shadow color for tab buttons on hover |
| `--comp-tabs_button_b-s_h`   | `--_comp-tabs_button_b-s_h`   | `inset 0 -3px 0 0 [color]` | Box shadow for tab buttons on hover       |
| `--comp-tabs_button_b`       | `--_comp-tabs_button_b`       | `none`                     | Border for tab buttons                    |
| `--comp-tabs_button_b-r_val` | `--_comp-tabs_button_b-r_val` | `8px`                      | Border radius value for tab buttons       |
| `--comp-tabs_button_b-r`     | `--_comp-tabs_button_b-r`     | `8px`                      | Border radius for tab buttons             |

### Tab Panels

| Global Variable         | Local Variable           | Default Value | Description                   |
| ----------------------- | ------------------------ | ------------- | ----------------------------- |
| `--comp-tabs_panel_p-i` | `--_comp-tabs_panel_p-i` | `0px`         | Padding inline for tab panels |
| `--comp-tabs_panel_p-b` | `--_comp-tabs_panel_p-b` | `2rem`        | Padding block for tab panels  |

### Horizontal Tabs Specific

| Global Variable                     | Local Variable            | Default Value | Description                                                    |
| ----------------------------------- | ------------------------- | ------------- | -------------------------------------------------------------- |
| `--comp-tabs_horizontal_button_b-r` | `--_comp-tabs_button_b-r` | `8px 8px 0 0` | Border radius for horizontal tab buttons (rounded top corners) |

### Vertical Tabs

```twig
{% include '@edw_paragraphs_tabs/tabs/tabs.twig' with {
  tabs_direction: 'vertical',
  tabs_tabs: [
    {
      title: 'Tab 1',
      content: '<p>Content for tab 1</p>'
    },
    {
      title: 'Tab 2',
      content: '<p>Content for tab 2</p>'
    }
  ]
} %}
```

### With Custom ID and Utility Classes

```twig
{% include '@edw_paragraphs_tabs/tabs/tabs.twig' with {
  tabs_id: 'my-custom-tabs',
  tabs_uc: ['custom-class', 'another-class'],
  tabs_tabs: [
    {
      title: 'Tab 1',
      content: '<p>Content for tab 1</p>'
    }
  ]
} %}
```

## Parameters

### Required

- **`tabs_tabs`** (array) - Array of tab objects, each containing:
  - `title` (string) - The tab button text
  - `content` (string|markup) - The tab panel content

### Optional

- **`tabs_id`** (string|null) - Custom ID prefix for tabs. Default: auto-generated (`tab-[random]`). Typically uses the paragraph ID when rendered in Drupal (e.g., `paragraph-123`).
- **`tabs_direction`** (string|null) - Tab orientation: `'horizontal'` or `'vertical'`. Default: `'horizontal'`. **Note:** Vertical orientation is not fully implemented yet and is currently in development.
- **`tabs_uc`** (array) - Array of utility classes to add to the main container. Default: `[]`
- **`tabs_button_uc`** (array) - Array of utility classes to add to tab buttons. Default: `[]`
- **`tabs_panel_uc`** (array) - Array of utility classes to add to tab panels. Default: `[]`

### Attribute Objects

- **`tabs_att`** (Drupal\Core\Template\Attribute) - Attributes for the main container
- **`tabs_button_att`** (Drupal\Core\Template\Attribute) - Internal use only. Attributes for tab buttons. To add custom classes, use `tabs_button_uc` instead.
- **`tabs_panel_att`** (Drupal\Core\Template\Attribute) - Internal use only. Attributes for tab panels. To add custom classes, use `tabs_panel_uc` instead.

## Keyboard Navigation

### Horizontal Tabs

- **Arrow Left** - Move focus to previous tab (wraps to last)
- **Arrow Right** - Move focus to next tab (wraps to first)
- **Home** - Move focus to first tab
- **End** - Move focus to last tab
- **Tab** - Move focus into the active tab panel

### Vertical Tabs

- **Arrow Up** - Move focus to previous tab (wraps to last)
- **Arrow Down** - Move focus to next tab (wraps to first)
- **Home** - Move focus to first tab
- **End** - Move focus to last tab
- **Tab** - Move focus into the active tab panel

## Accessibility

This component follows the [WAI-ARIA Authoring Practices for Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/):

- Uses proper ARIA roles: `tablist`, `tab`, `tabpanel`
- Manages `aria-selected` state on tabs
- Manages `aria-hidden` state on panels
- Uses `tabindex` for keyboard focus management
- Links tabs to panels via `aria-controls` and `aria-labelledby`
- Supports keyboard navigation
- Only one tab is focusable at a time (roving tabindex)
- Component is fully independent and isolated - multiple instances can coexist on the same page
- Supports nested tabs (tabs within tabs) without conflicts due to `:scope` selectors

## Generated HTML Structure

```html
<div class="comp--tabs horizontal-tabs" data-direction="horizontal">
  <ul class="tabs__nav horizontal-tabs__nav" role="tablist">
    <li role="presentation">
      <button
        class="tabs__button horizontal-tabs__button"
        role="tab"
        aria-selected="true"
        aria-controls="tab-[id]-1"
        tabindex="0"
      >
        Tab 1
      </button>
    </li>
    <!-- More tabs... -->
  </ul>

  <div class="tabs__panels horizontal-tabs__panels">
    <div
      class="tabs__panel horizontal-tabs__panel"
      id="tab-[id]-1"
      role="tabpanel"
      aria-labelledby="tab-[id]-1"
      aria-hidden="false"
    >
      <!-- Panel content -->
    </div>
    <!-- More panels... -->
  </div>
</div>
```

## CSS Classes

### Main Container

- `.comp--tabs` - Base component class
- `.horizontal-tabs` - Added when `tabs_direction` is `'horizontal'`
- `.vertical-tabs` - Added when `tabs_direction` is `'vertical'`

### Tab Navigation

- `.tabs__nav` - Tab list container
- `.horizontal-tabs__nav` / `.vertical-tabs__nav` - Direction-specific nav classes

### Tab Buttons

- `.tabs__button` - Base tab button class
- `.horizontal-tabs__button` / `.vertical-tabs__button` - Direction-specific button classes

### Tab Panels

- `.tabs__panels` - Panels container
- `.tabs__panel` - Individual panel class
- `.horizontal-tabs__panel` / `.vertical-tabs__panel` - Direction-specific panel classes

## JavaScript Behavior

The component includes automatic initialization via Drupal behaviors. The JavaScript:

1. Handles tab button clicks
2. Manages keyboard navigation based on `data-direction` attribute
3. Updates ARIA attributes appropriately
4. Sets focus on the selected tab when navigating with keyboard
5. Uses `:scope` selectors to prevent conflicts with nested tabs

## Browser Support

Requires support for:

- ES6 (arrow functions, const/let)
- `dataset` API
- `querySelectorAll` with `:scope` pseudo-class
- ARIA attributes

## Notes

- The first tab is automatically selected and shown on page load
- Tab panels are direct children to avoid selector conflicts with nested tabs
- Each tabs instance gets a unique ID to prevent conflicts on the same page
- The component is fully keyboard accessible and screen reader friendly

## TODO

- **Direction-specific classes review**: The direction-specific classes (`.horizontal-tabs__button`, `.horizontal-tabs__panel`, `.vertical-tabs__button`, `.vertical-tabs__panel`) will be reviewed and potentially removed after testing with the "coolcoalition.org" project to ensure they are not needed for styling purposes.
