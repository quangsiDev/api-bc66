var productService = {
  getList: function () {
    return axios.get(BASE_URL);
  },
  getDetail: function (id) {
    return axios.get(`${BASE_URL}/${id}`);
  },
  create: function (newProduct) {
    return axios.post(BASE_URL, newProduct);
  },
  update: function (id, product) {
    return axios.put(`${BASE_URL}/${id}`, product);
  },
  delete: function (id) {
    return axios.delete(`${BASE_URL}/${id}`);
  },
};

// service ~ quản lý nhóm chức năng
