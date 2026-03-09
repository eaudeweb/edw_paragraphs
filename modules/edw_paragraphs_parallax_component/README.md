EDW Paragraphs Parallax Component
=============================================

Provides a Parallax paragraph that displays layered content with GSAP-powered scrolling animations.

#### Parallax Component
| Field label          | Field name                | Description                                                        | Field type             | Cardinality | Required | Translatable | Widget         |
|----------------------|-------------------------  |--------------------------------------------------------------------|------------------------|-------------|----------|--------------|----------------|
| Title                | field_title               | Text title displayed in the section                                | Text (plain)           | Single      | No       | Yes          | Text field     |
| Text                 | field_text                | Paragraph text content                                             | Text (plain, long)     | Single      | No       | Yes          | Text area      |
| Image                | field_media               | Image displayed in the parallax section                            | Media entity reference | Single      | No       | No           | Media library  |
| Animation for Title  | field_animation_for_title | Defines GSAP animation type for the title (e.g. slide-up)          | List (text)            | Single      | No       | No           | Select list    |
| Animation for Text   | field_animation_for_text  | Defines GSAP animation type for the text (e.g. slide-right)        | List (text)            | Single      | No       | No           | Select list    |
| Animation for Image  | field_animation_for_image | Defines GSAP animation type for the image (e.g. slide-up)          | List (text)            | Single      | No       | No           | Select list    |
| Vertical Layout      | field_vertical_layout     | Check to display image and text vertically                         | Boolean                | Single      | No       | No           | Checkbox       |
| Reverse Layout       | field_reverse_layout      | Check to display text first and image after                        | Boolean                | Single      | No       | No           | Checkbox       |
| Full-width           | field_full_width          | Makes the parallax section full-width                              | Boolean                | Single      | No       | No           | Checkbox       |
| Background Color     | field_background_color    | Selects background color variant (e.g. Navy)                       | List (text)            | Single      | No       | No           | Select list    |
| Text Color           | field_text_color          | Selects text color variant (e.g. White)                            | List (text)            | Single      | No       | No           | Select list    |

---

## GSAP Library Integration

This module uses GSAP (GreenSock Animation Platform) for parallax and scroll animations.

### Step 1: Add the GSAP package to your composer.json

Add the following repository entry under "repositories":
```php
{
    "type": "package",
    "package": {
        "name": "greensock/gsap",
        "version": "3.12.5",
        "type": "drupal-library",
        "dist": {
            "url": "https://github.com/greensock/GSAP/archive/refs/tags/3.12.5.zip",
            "type": "zip"
        }
    }
}
```

### Step 2: Install GSAP

```
composer require greensock/gsap
```

## Usage

Once enabled, this module provides a Parallax component paragraph type.

Editors can:
* Add an image, title, and text content.
* Control animation direction for each element (title, text, image).
* Toggle vertical or reverse layout.
* Choose background and text color styles.
* Make the section full-width if needed.
