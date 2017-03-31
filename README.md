# wdt-emoji-bundle

Slack like emoji selector with apple/ios, twitter/twemoji, google, emojione, facebook, messenger and custom emoji support. I :heart: opensource.

Thanks to Cal Henderson @iamcal.

# Demo

![wdt-emoji-bundle gif](https://raw.githubusercontent.com/needim/wdt-emoji-bundle/master/wdt-emoji-bundle.gif "wdt-emoji-bundle gif")

# Installation

Use one of the following:
* npm `npm i wdt-emoji-bundle`
* bower `bower i wdt-emoji-bundle`
* pull in the source directly, load `wdt-emoji-bundle.min.js`, `wdt-emoji-bundle.css` and the `sheets/` directory

## Initialize

```javascript
wdtEmojiBundle.init('.your-inputs-selector');
```

### Advanced configuration

Tell the widget where to get the sheets from

```javascript
wdtEmojiBundle.defaults.emojiSheets.apple = './sheet_apple.png';        // default /sheets/sheet_apple_64.png
wdtEmojiBundle.defaults.emojiSheets.google = './sheet_google.png';      // default /sheets/sheet_google_64.png
wdtEmojiBundle.defaults.emojiSheets.twitter = './sheet_twitter.png';    // default /sheets/sheet_twitter_64.png
wdtEmojiBundle.defaults.emojiSheets.emojione = './sheet_emojione.png';  // default /sheets/sheet_emojione_64.png
wdtEmojiBundle.defaults.emojiSheets.facebook = './sheet_facebook.png';  // default /sheets/sheet_facebook_64.png
wdtEmojiBundle.defaults.emojiSheets.messenger = './sheet_messenger.png';  // default /sheets/sheet_messenger_64.png
```

===

Set emoji set default sheet

```javascript
wdtEmojiBundle.defaults.type = 'apple';
```

===

Hover color classes for picker's emoji's

```javascript
wdtEmojiBundle.defaults.pickerColors = [
  'green', 'pink', 'yellow', 'blue', 'gray'
];
```
===

Picker tab section's orders, higher is first. Bundle render the sections according to this values.

```
wdtEmojiBundle.defaults.sectionOrders = { 
  'Recent'  : 10, 
  'Custom'  : 9, 
  'People'  : 8, 
  'Nature'  : 7, 
  'Foods'   : 6, 
  'Activity': 5, 
  'Places'  : 4, 
  'Objects' : 3, 
  'Symbols' : 2, 
  'Flags'   : 1
};
```

### API

Render function takes any html string and convert to emojies based on the current bundle emoji type. (apple, google, twitter, emojione)

```javascript
var output = wdtEmojiBundle.render('Lorem ipsum :) :speak_no_evil:');
```

===

Event listeners: 'select', 'afterSelect', 'afterPickerOpen'

```javascript
wdtEmojiBundle.on('afterSelect', function (event) {
  console.log('element', event.el);
  console.log('emoji', event.emoji);
})
```

===

Auto open the emoji picker when the user types the colon key `:` in the input:

* Add class '.wdt-emoji-open-on-colon' to the input field that is going to have the emoji picker 

# TODO:

- Better documentation :)
- Responsive Improvements.
- Better popup positioning.
- Open on colon support for contenteditables.
- Frequently used emoji list with localstorage and/or API.
- Provide more events; open, close, pickeropen, pickerclose etc.
- Custom emoji support.
- Skin color support for apple icons.
- Better contenteditable support, WYSIWYG?
- Check browser compatibilities.

---

<http://ned.im/wdt-emoji-bundle>
