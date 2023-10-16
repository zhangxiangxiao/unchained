import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map((result) => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView(); // Exporting an instance of the class
