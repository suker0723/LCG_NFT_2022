import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
export function Browse({ getBrowseInfo, BrowseImage1, BrowseAttributes1, BrowseBackground1, RandomId }) {
  getBrowseInfo();
  return (
    <div className="site-card-wrapper">
      <p>Randomly get a NFT. </p>

      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ width: '240px' }} cover={<div style={{ backgroundColor: BrowseBackground1, width: '240px', height: '240px', }} dangerouslySetInnerHTML={{ __html: BrowseImage1 }} />} bordered={false}>
            <Meta title={RandomId} description={BrowseAttributes1} />
          </Card>
        </Col>
      </Row>
      <p>This process may takes sometime due to waiting time of transaction to contract.</p>
    </div>);

}
