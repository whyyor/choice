import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Form, Input, Table, Typography, Popconfirm, Button } from 'antd';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';

const originData = [];
for (let i = 0; i < 10; i++) {
    originData.push({
        key: i.toString(),
        name: `Ram ${i}`,
        fathersName: `Mr. Yadav ${i}`,
        gender: i % 2 === 0 ? 'Male' : 'Female',
        dob: `199${i}-0${i}-0${i}`,
        relationship: 'Son',
    });
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <Input /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const MembersTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            fathersName: '',
            gender: '',
            dob: '',
            relationship: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{ marginRight: 8, color: 'green' }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a style={{ color: 'red' }}>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <span>
                        <PlusCircleOutlined
                            style={{ color: 'green', marginRight: '8px', padding: '0 10px' }}
                        // You can add an onClick handler here to perform an action when the plus icon is clicked
                        />
                        <EditOutlined
                            style={{ color: 'red' }}
                            disabled={editingKey !== ''}
                            onClick={() => edit(record)}
                        />
                    </span>
                );
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: "Father's Name",
            dataIndex: 'fathersName',
            editable: true,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            editable: true,
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            editable: true,
        },
        {
            title: 'Relationship with HOF',
            dataIndex: 'relationship',
            editable: true,
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Card title="Family Data" style={{
            marginTop: '20px',
            boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)'
        }}>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </Card>
    );
};

export default MembersTable;

ReactDOM.render(<MembersTable />, document.getElementById('root'));
