import logo from "./logo.svg";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import { ClinicalCare } from "./constfile";
import ReactDOMServer from "react-dom/server";

function App() {
  const pdfRef = useRef(null);

  const renderFun = () => {
    return (
      <div ref={pdfRef}>
        <p
          style={{
            fontSize: "6px",
            fontWeight: "bold",
            marginBottom: "3px",
            width: "100%",
          }}
        >
          Patient Evidence of Care
        </p>
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontSize: "4px" }}>
              Patient name: <b>Doe, Jane</b>
            </p>
            <p style={{ fontSize: "4px" }}>
              Patient Date of Birth: <b>1950/01/01</b>{" "}
            </p>
            <p style={{ fontSize: "4px" }}>Patient MRN: 12345</p>
            <p style={{ fontSize: "4px" }}>Service Enrolled: RPM, CCM</p>
            <p style={{ fontSize: "4px" }}>Synced Devices: Blood Pressure</p>
          </div>
          <div style={{ marginLeft: "35px" }}>
            <p style={{ fontSize: "4px" }}>
              Account: <b>Grey Sloan Memorial Hospital</b>
            </p>
            <p style={{ fontSize: "4px" }}>
              Ordering Provider: Derek Shepherd, MD
            </p>
            <p style={{ fontSize: "4px" }}>
              Prepared: August 25, 2021 by MDE Care
            </p>
            <p style={{ fontSize: "4px" }}>Delivered: July 2021</p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <p style={{ fontSize: "5px", fontWeight: "bold" }}>Summary</p>
          {/* tabl1  */}
          <table style={{ width: "12%", borderCollapse: "collapse" }}>
            <tr>
              <td style={tableCellStyle}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Tasks
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  All call, follow up, ad escalation tasks
                </p>
              </td>
              <td style={{ ...tableCellStyle, width: "40px" }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Calls
                </p>
              </td>
              <td style={tableCellStyle}>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  0
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Follow-ups
                </p>
              </td>
              <td style={{ ...tableCellStyle, color: "red" }}>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                  }}
                >
                  0
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                  }}
                >
                  Escalation
                </p>
              </td>
            </tr>
          </table>
          {/* tabl2  */}
          <table
            style={{
              width: "10%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "82px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Vital Tracking
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Count of vitals provided by th patient either online or over
                  the phone
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  55
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Provided by Patient
                </p>
              </td>
            </tr>
          </table>

          {/* tabl3  */}
          <table
            style={{
              width: "12%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "85px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Engagement Score
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Best score out of 5 that a patient can complete either or over
                  th phone
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  3
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Current month
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  3
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Last 3 month
                </p>
              </td>
            </tr>
          </table>

          {/* tabl4  */}
          <table
            style={{
              width: "10%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "82px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Readiness for Change
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Score assessed by Clinician as the potient's readineed to make
                  a change in their life (0-Not ready, 5-unsure, 10-)
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  10
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Curren month
                </p>
              </td>
            </tr>
          </table>

          {/* tabl4  */}
          <table
            style={{
              width: "12%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "82px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Messaging
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Count of messages between a patient and his/here care team
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  9
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  From Care Team to Patient
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  0
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  From Patient to Care Team
                </p>
              </td>
            </tr>
          </table>

          {/* tabl5  */}
          <table
            style={{
              width: "11%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "41px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Total Time Spent
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Sum of minutes spent on care of patient
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  48
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Total Minutes
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  26
                  <br /> CCM Minutes
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  9 minutes of direct messaging, 17 minutes of clinical care and
                  anylysis
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  22 <br />
                  <span>RPM Minutes</span>
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  0 minutes of direct messaging, 22 minutes of clinical care and
                  anylysis
                </p>
              </td>
            </tr>
          </table>

          {/* tabl6  */}
          <table
            style={{
              width: "12%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr>
              <td style={{ ...tableCellStyle, width: "82px" }}>
                <p style={{ fontSize: "5px", margin: "1px", fontWeight: 500 }}>
                  Alerts
                </p>
                <p
                  style={{
                    fontSize: "4px",
                    margin: "1px",
                    fontStyle: "italic",
                  }}
                >
                  Triggered when a patient logs a vital
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  82
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Standard
                </p>
              </td>
              <td style={{ ...tableCellStyle }}>
                {" "}
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    margin: "1px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Out of Range
                </p>
              </td>
            </tr>
          </table>
        </div>

        {/* Task Summary */}
        <div>
          <p style={{ fontSize: "5px", fontWeight: "bold" }}>Task Summary</p>
          <table style={{ width: "12%", borderCollapse: "collapse" }}>
            <tr style={{ borderBottom: "1px solid" }}>
              <th
                style={{
                  fontSize: "5px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Tasks
              </th>
              <th
                style={{
                  fontSize: "5px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Status
              </th>
              <th
                style={{
                  fontSize: "5px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Type
              </th>
              <th
                style={{
                  fontSize: "5px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Schedule Date
              </th>
            </tr>
            <tr>
              <td style={{ fontSize: "4px" }}>Care Plan Review</td>
              <td style={{ fontSize: "4px" }}>COMPLETE on 07/28/2021</td>
              <td style={{ fontSize: "4px" }}>call</td>
              <td style={{ fontSize: "4px" }}>06/14/2021</td>
            </tr>
            <tr>
              <td style={{ fontSize: "4px" }}>Medication Reconciliation</td>
              <td style={{ fontSize: "4px" }}>COMPLETE on 08/10/2021</td>
              <td style={{ fontSize: "4px" }}>call</td>
              <td style={{ fontSize: "4px" }}>08/10/2021</td>
            </tr>
          </table>
        </div>

        {/* Notes and Related tasks*/}
        <div>
          <p style={{ fontSize: "5px", fontWeight: "bold" }}>
            Notes and Related tasks
          </p>
          <table
            style={{
              width: "12%",
              borderCollapse: "collapse",
              border: "1px solid",
            }}
          >
            <tr style={{ borderBottom: "1px solid" }}>
              <th
                style={{
                  fontSize: "4px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "40px",
                }}
              >
                Care Plan Review
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "35px",
                }}
              >
                COMPLETE
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "30px",
                }}
              >
                Created at: 05/31/2021
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Updated at: 07/28/2021
              </th>
            </tr>
            <tr>
              <td style={{ fontSize: "3px" }}>
                Related Notes <br />
                Ashley, Petty, CMA
              </td>
              <td style={{ fontSize: "3px" }}>
                Date <br /> 07/19/2021{" "}
              </td>
              <td style={{ fontSize: "3px" }}>1 minute</td>
              <td style={{ fontSize: "3px" }}>
                Description <br /> Called patient for monthly health coaching
                call, patient was unable to speak, call back later.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "3px" }}>Cara, Steckert, CNA</td>
              <td style={{ fontSize: "3px" }}>07/28/2021 </td>
              <td style={{ fontSize: "3px" }}>8 minutes</td>
              <td style={{ fontSize: "3px" }}>
                Patient's Main discussion on Call: The patient is well and has
                no concerns. We went over the Care Plan Review, all questions
                answered. Patient's Goal: Her goal is to lose weight. She is
                10/10 ready to achieve this goal. Her motivation is to be a
                healthier weight for her height. Vitals Being Tracked: Weight,
                and Blood Pressure, and Heart Rate in RPM. Upcoming
                Appointments: Orthopedic Doctor on Monday.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid" }}>
              <td style={{ fontSize: "3px" }}>Cara, Steckert, CNA</td>
              <td style={{ fontSize: "3px" }}>07/28/2021 </td>
              <td style={{ fontSize: "3px" }}>2 minutes</td>
              <td style={{ fontSize: "3px" }}>
                Initiated Patient Health Assessment with patient during monthly
                coaching call. Completed initial sections including General
                Health, and Chronic Diseases. Patient encouraged to complete
                remaining sections PHA through patient portal prior to next
                month’s coaching call.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid" }}>
              <th
                style={{
                  fontSize: "4px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "40px",
                }}
              >
                Care Plan Review
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "35px",
                }}
              >
                COMPLETE
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                  width: "30px",
                }}
              >
                Created at: 05/31/2021
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Updated at: 07/28/2021
              </th>
            </tr>
          </table>
        </div>

        {/* Notes and Related tasks*/}
        <div>
          <p style={{ fontSize: "5px", fontWeight: "bold" }}>
            Clinical Care and Analysis
          </p>
          <table
            style={{
              width: "12%",
              borderCollapse: "collapse",
              borderBottom: "1px solid",
            }}
          >
            <tr style={{ borderBottom: "1px solid", borderTop: "1px solid" }}>
              <th
                style={{
                  fontSize: "4px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Sender
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Date
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Minutes
              </th>
              <th
                style={{
                  fontSize: "4px",
                  margin: "1px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                Description
              </th>
            </tr>
            {ClinicalCare.map((item) => (
              <tr>
                <>
                  <td style={{ fontSize: "3px" }}>{item.sender}</td>
                  <td style={{ fontSize: "3px" }}>{item.date}</td>
                  <td style={{ fontSize: "3px" }}>{item.min}</td>
                  <td style={{ fontSize: "3px" }}>{item.desc}</td>
                </>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  };

  const pdfHandle = async () => {
    var doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [210, 520],
    });
    doc.setFontSize(12);
    const content = pdfRef.current;

    doc.html(content, {
      callback: function (doc) {
        doc.save("output.pdf");
      },
      x: 10,
      y: 20,
    });
    // doc.save();
  };

  const tableCellStyle = {
    border: "1px solid black", // Setting border for each cell
    fontSize: "3px", // Adjusting font size (you can change this as needed)
  };

  return (
    <div>
      <button onClick={pdfHandle}>Download</button>
      {renderFun()}
    </div>
  );
}

export default App;
