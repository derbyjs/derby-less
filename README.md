derby-less
==========

# Derby plugin to add Less support

## Usage

Right after creating your Derby app, add:

```js
app.serverUse(module, 'derby-less');
```

Make sure this is before any calls to `app.loadViews()`.

After that you can use `*.less` files instead of `*.css`