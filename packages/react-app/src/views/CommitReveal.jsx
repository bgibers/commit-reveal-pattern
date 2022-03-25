import React from "react";
import { List, Col, Row } from "antd";

import Address from "../components/Address";

export default function CommitReveal({ commitEvents, revealEvents, mainnetProvider }) {
  return (
    <div>
      <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
        <Row>
          <Col>
            <h2>Commit events</h2>
            <List
              bordered
              dataSource={commitEvents}
              renderItem={item => {
                return (
                  <List.Item>
                    <Address value={item.args.sender} ensProvider={mainnetProvider} fontSize={16} /> ={">"}
                    {item.args.dataHash}
                  </List.Item>
                );
              }}
            />
          </Col>
        </Row>
      </div>
      <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
        <Row>
          <Col>
            <h2>Reveal events</h2>
            <List
              bordered
              dataSource={revealEvents}
              renderItem={item => {
                return (
                  <List.Item>
                    <Address value={item.args.sender} ensProvider={mainnetProvider} fontSize={16} /> ={">"}
                    {item.args.revealHash}
                    <h4>Random number: {item.args.random}</h4>
                  </List.Item>
                );
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
