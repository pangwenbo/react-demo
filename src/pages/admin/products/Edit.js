import React, { useEffect } from 'react';
import { Form, Card, Input, Button, message } from 'antd';
import api from '../../../api';
import { connect } from 'react-redux';
const Edit = props => {
        console.log(props.match.params.id);
        //props.match.params.id 存在既为修改
        const [form] = Form.useForm();
        useEffect(() => {
                if (props.match.params.id) {
                        api.getBusiness({ id: props.match.params.id }).then(res => {
                                form.setFieldsValue(res.data);
                        });
                }
        }, []);
        const onFinish = values => {
                api.addOrUpdateBusiness({
                        body: {
                                ...values,
                        },
                }).then(res => {
                        if (res.errorCode === 0) {
                                message.success('提交成功');
                        }
                });
        };
        const onFinishFailed = errorInfo => {
                message.error('验证未通过');
        };
        return (
                <Card
                        title={props.match.params.id ? '编辑' : '添加'}
                        extra={
                                <Button
                                        type="primary"
                                        size="small"
                                        onClick={() => {
                                                props.history.push('/admin/products');
                                        }}
                                >
                                        返回
                                </Button>
                        }
                >
                        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
                                <Form.Item label="年度任务" name="annualTask" rules={[{ required: true, message: '请输入年度任务!' }]}>
                                        <Input></Input>
                                </Form.Item>
                                <Form.Item label="已完成业绩" name="donePerformance" rules={[{ required: true, message: '请输入已完成业绩!' }]}>
                                        <Input></Input>
                                </Form.Item>
                                <Form.Item>
                                        <Button htmlType="submit">保存</Button>
                                </Form.Item>
                        </Form>
                </Card>
        );
};
export default connect(state => state.products)(Edit);
