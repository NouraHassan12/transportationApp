import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faPlus,
  
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const { SearchBar } = Search;


const defaultSorted = [
  {
    dataField: "ID",
    order: "asc",
  },
];


const TableComponent = (props) => {

  const columns = [
    {
      dataField: "ID",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "Name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "TotalFleet",
      text: "TotalFleet",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.ID}>
              <Button color="dark" className="ml-5">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.ID}>
              <Button color="dark" className="ml-5">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
  
         
          </div>
        );
      },
    },
  ];

  
  return (
    <Container className="mt-4">
      {props.getCompaniesList ? (
        <ToolkitProvider
          bootstrap4
          keyField="ID"
          data={props.getCompaniesList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button  className="mr-2">
                      <FontAwesomeIcon icon={faPlus} /> Add Transportation
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorCompaniesList ? (
            <h4>{props.errorCompaniesList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};


const mapStateToProps = (state) => {
  return {
    getCompaniesList: state.companies.getCompaniesList,
    errorCompaniesList: state.companies.errorCompaniesList,
  };
};

export default connect(mapStateToProps, null)(TableComponent);
