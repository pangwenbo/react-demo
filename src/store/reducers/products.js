export default (state = { tableData: [], pageIndex: 1, total: 1, pageSize: 10 }, action) => {
        switch (action.type) {
                case 'PRODUCTS_LOADED':
                        console.log(action);
                        const data = action.res.data;
                        return {
                                ...state,
                                tableData: data.content,
                                pageIndex: data.pageable.pageNumber + 1,
                                pageSize: data.pageable.pageSize,
                                total: data.totalElements,
                        };

                default:
                        return state;
        }
};
