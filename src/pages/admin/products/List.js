import React, { useEffect, useState } from "react";
import { Table, Card, Button, Popconfirm, Pagination, message } from "antd";
import api from "../../../api";
import { loadProduct } from "../../../store/actions/products";
import { connect } from "react-redux";
const List = (props) => {
  console.log(props);
  const { tableData, pageIndex, total, pageSize } = props;
  useEffect(() => {
    f_getTableData();
  }, []);
  function f_getTableData(pageIndex = 1, pageSize = 10) {
    props.dispatch(
      loadProduct({
        pageIndex,
        pageSize,
      })
    );
  }
  const columns = [
    {
      title: "序号",
      key: "id",
      width: 80,
      align: "center",
      render: (txt, record, index) => index + 1,
    },
    { title: "id", dataIndex: "id" },
    { title: "年度", dataIndex: "year" },
    { title: "年度任务", dataIndex: "annualTask" },
    { title: "已完成业绩（元）", dataIndex: "donePerformance" },
    { title: "奖励（元）", dataIndex: "reward" },
    {
      title: "操作",
      render: (txt, record, index) => {
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                props.history.push(`/admin/products/edit/${record.id}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定删除此项？"
              onCancel={() => {
                message.info("用户取消");
              }}
              onConfirm={() => {
                api
                  .deleteBusiness({ body: { ids: [record.id] } })
                  .then((res) => {
                    if (res.errorCode === 0) {
                      message.success("删除成功");
                      f_getTableData(1, 10);
                    }
                  });
              }}
            >
              <Button type="danger" style={{ margin: "10px" }}>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return (
    <Card
      title="商品列表"
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => {
            props.history.push("/admin/products/edit");
          }}
        >
          添加
        </Button>
      }
    >
      <Table
        pagination={false}
        columns={columns}
        dataSource={tableData}
      ></Table>
      <Pagination
        total={total}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `共 ${total} 条`}
        pageSizeOptions={["5", "10", "15", "20"]}
        defaultPageSize={pageSize}
        defaultCurrent={pageIndex}
        onShowSizeChange={(pageIndex, pageSize) => {
          f_getTableData(pageIndex, pageSize);
        }}
        onChange={(pageIndex) => {
          f_getTableData(pageIndex, pageSize);
        }}
      ></Pagination>
    </Card>
  );
};

export default connect((state) => state.products)(List);
