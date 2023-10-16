import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    // Event delegation
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      // console.log(btn);
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      // console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, 'next');
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, 'prev');
    }
    // Other page
    if (curPage < numPages) {
      return `
      ${this._generateMarkupButton(curPage, 'prev')}
      ${this._generateMarkupButton(curPage, 'next')}
      `;
    }
    // Page 1, and there are NO other pages
    return '';
  }

  _generateMarkupButton(curPage, type) {
    const icon = type === 'prev' ? 'left' : 'right';
    const page = type === 'prev' ? curPage - 1 : curPage + 1;
    return `
    <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
      <span>Page ${page}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-${icon}"></use>
      </svg>
    </button>
    `;
  }
}

export default new PaginationView(); // Exporting an instance of the class
