import { range } from "../../utils";

const Pagination = (props) => {
  const { total, limit, currentPage, selectPage } = props;
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount + 1);

  return (
    <ul>
      {pages.map((page) => (
        <li
          data-testid="page-container"
          key={page}
          onClick={() => selectPage(page)}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          <span>{page}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
