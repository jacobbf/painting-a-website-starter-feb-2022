import * as Bindery from 'bindery';

Bindery.makeBook({ 
  content: '#content',
  pageSetup: {
    margin: {
      top: '16pt',
      inner: '24pt',
      outer: '16pt',
      bottom: '16pt'
    }
  },
  rules: [
    Bindery.PageBreak({ selector: 'h2', position: 'before' }),
    Bindery.PageBreak({ selector: '.break', position: 'after' }),
  ]
});
 