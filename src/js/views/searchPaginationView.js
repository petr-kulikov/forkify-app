import View from './View.js';
import icons from 'url:../../img/icons.svg';

class SearchPaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;
    const paginationNextMarkup = `
      <button class="btn--inline pagination__btn--next" data-goto="${
        curPage + 1
      }">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>
    `;
    const paginationPrevMarkup = `
      <button class="btn--inline pagination__btn--prev" data-goto="${
        curPage - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
      </button>
    `;

    // 1. First page, only button to move forward
    if (curPage === 1 && numPages > 1) {
      return paginationNextMarkup;
    }
    // 2. Last page, only button to move backward
    if (curPage === numPages && numPages > 1) {
      return paginationPrevMarkup;
    }
    // 3. Both buttons are present
    if (curPage < numPages) {
      return `${paginationPrevMarkup}${paginationNextMarkup}`;
    }
    // 4. Less that RES_PER_PAGE previews on page, no buttons
    return '';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const moveToPage = Number(btn.dataset.goto);
      handler(moveToPage);
    });
  }
}

export default new SearchPaginationView();
