import api from '../../api';
export const loadProduct = params => async dispatch => {
        console.log(params);
        const res = await api.getBusinessPage({
                body: {
                        queryParams: [
                                {
                                        innerLinkMode: 'And',
                                        key: 'year',
                                        logic: 'Equal',
                                },
                        ],
                        pageIndex: params.pageIndex,
                        pageSize: params.pageSize,
                },
        });
        dispatch({
                type: 'PRODUCTS_LOADED',
                res,
        });
};
