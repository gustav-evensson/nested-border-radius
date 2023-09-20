# Nested Border Radius

This project got inspired by this [instagram post](https://www.instagram.com/p/CwmgVV-h9ps/?img_index=1) from [pixselacademy](https://www.instagram.com/pixselacademy/) but originally from [alenn.design](https://www.instagram.com/alenn.design/) where he explains it very well in my opinion.

It's a [React](https://react.dev/) project styled with [Tailwind](https://tailwindcss.com/) that visualizes how to correctly calculate nested border radii and lets u play around with the settings to match your own use cases.

## How it works

The calculation depends on 3 variables:

- The parent element's border radius
- The parent element's padding
- The child element's border radius

Usually the parent radius is the driving one, meaning we use that to calculate the child radius but of course you can do it the other way around.

The calculation goes: <code>Child radius = Parent radius - Parent padding</code>

### Incorrect example

Here we set the border radius of both elements to 32px with a 12px padding on the parent and as shown on the image below the corners looks off.

![incorrect example image](https://github.com/gustav-evensson/nested-border-radius/blob/main/readme_assets/incorrect_example.png)

### Correct example

- Parent radius = 32px
- Parent padding = 12px

Using our formula gets us, <code>32 - 12 = 20</code>. Now we can se how the corners looks smooth ant the padding is even all around.

![correct exmaple image](https://github.com/gustav-evensson/nested-border-radius/blob/main/readme_assets/correct_example.png)
