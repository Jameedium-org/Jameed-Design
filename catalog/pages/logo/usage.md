# The use of the mark:

there is **no point** in having an awesome mark and typography if we **aren't** going to **use it**. RIGHT!?

## Things to avoid:

as all awesome designers -like you- know, every brand has some no...nos when it comes to the usage of there brand.

#### Skew:

```hint|warning
**Don't skew** the logo or **scale it unevenly**.
```

```image
src: mark-skewed.svg
plain: true
```

#### Color:

```hint|warning
**Don't recolor** the logo with any colors other than the colors used by the guidelines [here](#coloring).
```

```image
src: mark-colored-x.svg
plain: true
```

```hint
**Hint:** you can always color the mark with white or black if the mark colors are chalenging.
```
## Code:

```code
lang: html
---
<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit("Apple");
echo $apple->get_name();
?>
```