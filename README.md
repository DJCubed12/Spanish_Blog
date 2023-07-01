# SpanishBlog

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend database

Run `npm run backend` to start a `json-server` database on port `3000` (`http://localhost:3000/`).

# Developement Help & Conventions

## Styling & Themeing

Style sheets can be registed as global across the app in `angular.json` in the `styles` list. `src/styles.scss` is a listed here. There `@include mat.core()` and `@mat.core-theme()` lie to provide base themeing for the app.

This project accomplishes themeing through angular's framework. The palettes and themes used in the app are defined in `src/themes.scss` using this framework.

### Palettes

Palettes define a color to be used in any of several hues. They are named in `$lower-kabob-case` by convention here. New palettes are created like this:

```scss
$my-palette: mat.define-palette(mat.$deep-orange-palette, 900, A100, A400);
```

Parameters

1. The angular palette to base it off of.
2. (Optional) The default hue used if one is not provided.
3. (Optional) Defines the 'light' hue.
4. (Optional) Defines the 'dark' hue.

### Themes

Themes use combine several palettes as well as typography for use by Angular Material components. They also define size and margining by a `density`. By convention, they are named in `$Capital-kabob-case`. They are created like this:

```scss
$My-theme: mat.define-dark-theme(
  (
    color: (
      primary: $primary,
      accent: $accent,
      ...,
    ),
    typography: mat.define-typography-config(),
    density: 0,
  )
);
```

A theme can be either light or dark by using `mat.define-light-theme` or `mat.define-dark-theme`.

On an Angular Material component the `color` attribute can be set to any key listed under `color` in the theme definition.

### Themeing Angular Material components

Not all of our Angular Material components are globally themed, therefore they must be styled individually in their related `.scss` files. To do this, include this snippet at the top of the stylesheet:

```scss
@use "@angular/material" as mat;
@use "../../themes.scss" as themes;

@include mat.button-theme(themes.$My-theme);
...
```

Each Angular Material component has it respective mixin like `mat.button-theme()`. They each take on argument for what theme to use. To see complete list of these mixins, see the Angular Material source files: https://github.com/angular/components/blob/main/src/material/core/theming/_all-theme.scss

### Using palettes on custom components

To use colors from palettes on our custom components, include a mixin defined in `src/themes.scss` inside a ruleset. These mixins reflect the name of the palette used and take an optional argument for what hue value to use (`500` is used by default). Define new mixins like this:

```scss
@mixin my-palette($hue: 500) {
  background-color: mat.get-color-from-palette($my-palette, $hue);
  color: mat.get-color-from-palette($my-palette, "#{$hue}-contrast");
}
```

# Angular help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
