ImagePreviewer

```js
<ImagePreviewer

  handleRemove={(id) => console.log('Removed image ' + id)}
  handleRetry={(id) => console.log('Retried image ' + id)}
  handleFiles={(files) => {
    console.log('Selected files');
    console.log(files);
  }}
/>
```
