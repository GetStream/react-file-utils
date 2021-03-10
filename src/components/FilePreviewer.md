```js
<FilePreviewer
  uploads={[
    {
      id: '1',
      previewUri: 'https://placeimg.com/640/480/any',
      state: 'uploading',
      file: {
        name: 'image.png',
        type: 'image/png',
      },
    },
    {
      id: '2',
      url: 'https://placeimg.com/480/480/any',
      state: 'finished',
      file: {
        name: 'homevideo.mp4',
        type: 'video/mp4',
      },
    },
    {
      id: '3',
      url: 'https://placeimg.com/100/100/any',
      state: 'failed',
      file: {
        name: 'helloworld.txt',
        type: 'text/plain',
      },
    },
  ]}
/>
```
