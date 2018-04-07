// @flow
import React, { Component } from 'react';

import './HierarchyList.css';

export type HierarchyPayload = {
    type: 'string' | 'number' | 'boolean' | 'date',
    payload: any,
}

export type HierarchyPayloadRow = {
    columns: HierarchyPayload[],
    children?: Hierarchy,
}

export type Hierarchy = {
    headers: string[];
    payload: HierarchyPayloadRow[],
}

export type HierarchyProps = {
    hierarchy: Hierarchy,
}

function createHeader(header: string[]) {
    return <section className="HierarchyList-Header">
        {header.map((headerField, index) => <div key={index}>{headerField}</div>)}
    </section>;
}

function createRow(row: HierarchyPayloadRow, parentIndex: string) {
    return <section key={parentIndex} className="HierarchyList-Row">
        {row.columns.map((item, index) => <div key={parentIndex + index}>{item.payload}</div>)}
    </section>
}

function createRows(rows: HierarchyPayloadRow[]) {
    return rows.map((row, index) => createRow(row, index.toString()));
}

export default function HierarchyList(props: HierarchyProps) {
    return (<div className="HierarchyList">
        {createHeader(props.hierarchy.headers)}
        {createRows(props.hierarchy.payload)} 
    </div>);
}