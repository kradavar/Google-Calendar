import * as React from "react";
import * as moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/App.css";
// Calendar
import { CalendarTable } from "./View/Table-components/CalendarTable";
import { SharedViewContext } from "./Context";
import { VIEW } from "./constants/constants";
import { Header } from "./View/Header";
import { SignModal } from "./View/Authorization";

export interface IAppState {
  view: string;
  renderedDate: moment.Moment;
  changeViewType: (e: Event) => void;
  nextPeriod: () => void;
  previuosPeriod: () => void;
  showModal: boolean;
  signType: string;
  showToast: boolean;
  showSuccessToast: (message: string) => any;
  showErrorToast: () => any;
}

class App extends React.Component<{}, IAppState> {
  changeViewType: (e: any) => void;
  nextPeriod: () => void;
  previuosPeriod: () => void;
  showSuccessToast: (message: string) => any;
  showErrorToast: () => any;
  constructor(props: any) {
    super(props);
    this.changeViewType = e => {
      this.setState({
        view: e.target.value
      });
    };

    this.nextPeriod = () => {
      this.setState({
        //@ts-ignore
        renderedDate: this.state.renderedDate.add(1, this.state.view)
      });
    };

    this.previuosPeriod = () => {
      this.setState({
        //@ts-ignore
        renderedDate: this.state.renderedDate.subtract(1, this.state.view)
      });
    };

    this.showSuccessToast = (message = "Welcome!") => {
      debugger;
      if (this.state.showToast) {
        this.setState({
          showToast: false
        });
        return "";
      } else {
        this.setState({
          showToast: true
        });
        return toast.success(message, {
          hideProgressBar: true
        });
      }
    };

    this.showErrorToast = () => {
      if (this.state.showToast) {
        this.setState({
          showToast: false
        });
        return "";
      } else {
        this.setState({
          showToast: true
        });
        return toast.error("Sorry, something went wrong", {
          hideProgressBar: true
        });
      }
    };

    this.state = {
      view: VIEW.MONTH,
      renderedDate: moment(),
      changeViewType: this.changeViewType,
      nextPeriod: this.nextPeriod,
      previuosPeriod: this.previuosPeriod,
      showModal: false,
      signType: "Sign in",
      showSuccessToast: this.showSuccessToast,
      showErrorToast: this.showErrorToast,
      showToast: false
    };
  }

  handleClose = (e: Event) => {
    this.setState({
      showModal: false,
      showToast: false
    });
    e && e.stopPropagation();
  };

  handleOpen = (e: any) => {
    this.setState({
      showModal: true,
      signType: e.target.value,
      showToast: false
    });
    e && e.stopPropagation();
  };

  render() {
    return (
      <SharedViewContext.Provider value={this.state}>
        <Header handleOpen={this.handleOpen} />
        <div className="container">
          <div className="d-flex flex-column  justify-content-center calendar-table">
            <CalendarTable />
          </div>
          {this.state.showModal && (
            <SignModal
              type={this.state.signType}
              handleClose={this.handleClose}
            />
          )}
          <ToastContainer autoClose={1000} />
        </div>
      </SharedViewContext.Provider>
    );
  }
}

export default App;
