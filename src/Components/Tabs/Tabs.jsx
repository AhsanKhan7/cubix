import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import classnames from "classnames";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

import android from "../../Assets/tab_Assets/android.svg";
import angular from "../../Assets/tab_Assets/angular.svg";
import appium from "../../Assets/tab_Assets/appium.svg";
import apple from "../../Assets/tab_Assets/apple.svg";
import aws from "../../Assets/tab_Assets/aws.svg";
import azure from "../../Assets/tab_Assets/azure.svg";
import digitalOcean from "../../Assets/tab_Assets/digitalOcean.svg";
import dynamoDb from "../../Assets/tab_Assets/dynamoDb.svg";
import firebase from "../../Assets/tab_Assets/firebase.svg";
import flutter from "../../Assets/tab_Assets/flutter.svg";
import gradle from "../../Assets/tab_Assets/gradle.svg";
import html from "../../Assets/tab_Assets/html.svg";
import iconic from "../../Assets/tab_Assets/iconic.svg";
import java from "../../Assets/tab_Assets/java.svg";
import jenkins from "../../Assets/tab_Assets/jenkins.svg";
import kotlin from "../../Assets/tab_Assets/kotlin.svg";
import linode from "../../Assets/tab_Assets/linode.svg";
import magento from "../../Assets/tab_Assets/magento.svg";
import mongo from "../../Assets/tab_Assets/mongo.svg";
import mssql from "../../Assets/tab_Assets/mssql.svg";
import node from "../../Assets/tab_Assets/node.svg";
import objectiveC from "../../Assets/tab_Assets/objectiveC.svg";
import php from "../../Assets/tab_Assets/php.svg";
import rackSpace from "../../Assets/tab_Assets/rackSpace.svg";
import reactNative from "../../Assets/tab_Assets/reactNative.svg";
import redis from "../../Assets/tab_Assets/redis.svg";
import selinium from "../../Assets/tab_Assets/selinium.svg";
import shopify from "../../Assets/tab_Assets/shopify.svg";
import sql from "../../Assets/tab_Assets/sql.svg";
import swift from "../../Assets/tab_Assets/swift.svg";
import typeScript from "../../Assets/tab_Assets/typeScript.svg";
import vue from "../../Assets/tab_Assets/vue.svg";
import wordPress from "../../Assets/tab_Assets/wordPress.svg";
import wpf from "../../Assets/tab_Assets/wpf.svg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className={styles.tabs}>
      <h2>Technologies we work with</h2>

      <div className={styles.tabCont}>
        <Nav tabs className={styles.tabNav}>
          <NavItem>
            <NavLink
              //   className={classnames({ active: activeTab === "1" })}
              className={styles.tabNavLink}
              onClick={() => {
                toggle("1");
              }}
            >
              Mobile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={styles.tabNavLink}
              onClick={() => {
                toggle("2");
              }}
            >
              Front end
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={styles.tabNavLink}
              onClick={() => {
                toggle("3");
              }}
            >
              Database
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={styles.tabNavLink}
              onClick={() => {
                toggle("4");
              }}
            >
              Backend
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={styles.tabNavLink}
              onClick={() => {
                toggle("5");
              }}
            >
              CMS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={styles.tabNavLink}
              onClick={() => {
                toggle("6");
              }}
            >
              Infra and devops
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={apple} alt="pic" />
                      <p>Apple</p>
                    </section>
                    <section>
                      <img src={android} alt="pic" />
                      <p>Android</p>
                    </section>
                    <section>
                      <img src={reactNative} alt="pic" />
                      <p>React Native</p>
                    </section>
                    <section>
                      <img src={flutter} alt="pic" />
                      <p>Flutter</p>
                    </section>
                    <section>
                      <img src={iconic} alt="pic" />
                      <p>Ionic</p>
                    </section>
                    <section>
                      <img src={swift} alt="pic" />
                      <p>Swift</p>
                    </section>
                  </div>
                  <div>
                    <section>
                      <img src={kotlin} alt="pic" />
                      <p>Kotlin</p>
                    </section>
                    <section>
                      <img src={objectiveC} alt="pic" />
                      <p>Objectivec</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={angular} alt="pic" />
                      <p>Angular</p>
                    </section>
                    <section>
                      <img src={reactNative} alt="pic" />
                      <p>React Native</p>
                    </section>
                    <section>
                      <img src={typeScript} alt="pic" />
                      <p>TypeScript</p>
                    </section>
                    <section>
                      <img src={vue} alt="pic" />
                      <p>Vue</p>
                    </section>
                    <section>
                      <img src={wpf} alt="pic" />
                      <p>Wpf</p>
                    </section>
                    <section>
                      <img src={html} alt="pic" />
                      <p>Html5</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={mongo} alt="pic" />
                      <p>Mongo Db</p>
                    </section>
                    <section>
                      <img src={sql} alt="pic" />
                      <p>My sql</p>
                    </section>
                    <section>
                      <img src={mssql} alt="pic" />
                      <p>Mssql</p>
                    </section>
                    <section>
                      <img src={firebase} alt="pic" />
                      <p>Firebase</p>
                    </section>
                    <section>
                      <img src={dynamoDb} alt="pic" />
                      <p>Dynamodb</p>
                    </section>
                    <section>
                      <img src={redis} alt="pic" />
                      <p>Redis</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={php} alt="pic" />
                      <p>Php</p>
                    </section>
                    <section>
                      <img src={java} alt="pic" />
                      <p>Java</p>
                    </section>
                    <section>
                      <img src={node} alt="pic" />
                      <p>Node.js</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={wordPress} alt="pic" />
                      <p>Wordpress</p>
                    </section>
                    <section>
                      <img src={magento} alt="pic" />
                      <p>Magento</p>
                    </section>
                    <section>
                      <img src={shopify} alt="pic" />
                      <p>Shopify</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <div className={styles.tab}>
                  <div>
                    <section>
                      <img src={aws} alt="pic" />
                      <p>Aws</p>
                    </section>
                    <section>
                      <img src={gradle} alt="pic" />
                      <p>Gradle</p>
                    </section>
                    <section>
                      <img src={jenkins} alt="pic" />
                      <p>Jenkins</p>
                    </section>
                    <section>
                      <img src={appium} alt="pic" />
                      <p>Appium</p>
                    </section>
                    <section>
                      <img src={selinium} alt="pic" />
                      <p>Selinium</p>
                    </section>
                  </div>
                  <div>
                    <section>
                      <img src={azure} alt="pic" />
                      <p>Azure</p>
                    </section>
                    <section>
                      <img src={digitalOcean} alt="pic" />
                      <p>Digital ocean</p>
                    </section>
                    <section>
                      <img src={rackSpace} alt="pic" />
                      <p>Rack space</p>
                    </section>
                    <section>
                      <img src={linode} alt="pic" />
                      <p>Linode</p>
                    </section>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
