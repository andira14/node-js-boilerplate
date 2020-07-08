const simplePagination = (page = 1, row = 10) => {
  const pagination = {
    page,
    row,
  };
  if (row) {
    pagination.row = row;
  }
  if (page) {
    pagination.page = (page - 1) * pagination.row;
  }

  return pagination;
};

export default {
  simplePagination,
};
