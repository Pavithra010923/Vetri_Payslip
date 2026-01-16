import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Images/vislogo.png'
import './PayslipReview.css'
import html2pdf from 'html2pdf.js'
import { useReactToPrint } from 'react-to-print'

function PayslipReview() {
  const navigate = useNavigate()
  const printRef = useRef()

  const [payslip, setPayslip] = useState(null)

  useEffect(() => {
    const storedPayslip = localStorage.getItem('payslip')
    if (storedPayslip) {
      setPayslip(JSON.parse(storedPayslip))
    }
  }, [])

  function handleLogout() {
    navigate('/')
  }

  if (!payslip) {
    return <h2 style={{ textAlign: 'center' }}>No Payslip Found</h2>
  }

  const {
    month,
    name,
    empId,
    payPeriod,
    paidDays,
    lop,
    paymentDate,
    basic,
    incentive,
    tax,
    gross,
    totalDeduction,
    netPay
  } = payslip

  function handleDownload() {
  const element = document.querySelector('.payslip-container-33')

  const options = {
    margin: 0.5,
    filename: `Payslip_${empId}_${month}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 10 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }

  html2pdf().set(options).from(element).save()
}

  return (
    <div className='pc'>

      {/* HEADER */}
      <div className='payslip-container-1'>
        <div className='pc1-1'>
          <h1>VETRI IT SYSTEMS</h1>
          <p>-Employee Payslip-</p>
        </div>
        <div className='pc1-2'>
          <Link to='/payslip' className='generate-payslip'>Generate payslip</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* BODY */}
      <div className='payslip-container2'>
        <h1>EMPLOYEE PAYSLIP</h1>

        <div className='payslip-print-download'>
          <button onClick={() => window.print()}><i class="fa-solid fa-print"></i> Print</button>
          <button onClick={handleDownload}><i class="fa-solid fa-download"></i> Download</button>
        </div>

        <div className='payslip-container-33'>
          <div className='pc3-1'>
            <div className='pc3-1-1'>
              <div><img src={logo} alt="logo" /></div>
              <h1>VETRI IT SYSTEMS PVT LTD.,</h1>
              <p>Shanthi complex, Second floor,</p>
              <p>Surandai, Tenkasi - 629 859</p>
              <p>India</p>
            </div>
            <div className='pc3-1-2'>
              <p>Payslip for the month</p>
              <div><b>{month}</b></div>
            </div>
          </div>

          <hr />

          {/* EMPLOYEE SUMMARY */}
          <div className='payslip-container-4'>
            <h1>Employee Pay Summary <span>*</span></h1>

            <div className='pc-4'>
              <div>
                <div className='pc4-1'>
                  <div>Employee Name</div><div>:</div>
                  <div>{name}</div>
                </div>

                <div className='pc4-1'>
                  <div>Employee ID</div><div>:</div>
                  <div>{empId}</div>
                </div>

                <div className='pc4-1'>
                  <div>Pay Period</div><div>:</div>
                  <div>{payPeriod}</div>
                </div>
              </div>

              <div>
                <div className='pc4-1'>
                  <div>Paid Days</div><div>:</div>
                  <div>{paidDays}</div>
                </div>

                <div className='pc4-1'>
                  <div>Loss of Pay Days</div><div>:</div>
                  <div>{lop}</div>
                </div>

                <div className='pc4-1'>
                  <div>Payment Date</div><div>:</div>
                  <div>{paymentDate}</div>
                </div>
              </div>
            </div>

            <hr />

            {/* INCOME */}
            <div className='pc-5'>
              <h1>Income Details <span>*</span></h1>

              <div className='pc-5-1'>
                <div className='pc-5-col1'>
                  <div className='pc-5-col1-1'>
                    <div>Earnings</div><div>Amount</div>
                  </div>

                  <div className='pc-5-col1-2'>
                    <div>Basic</div>
                    <div>{basic}</div>
                  </div>

                  <div className='pc-5-col1-2'>
                    <div>Incentive</div>
                    <div>{incentive}</div>
                  </div>

                  <div className='pc-5-col1-3'>
                    <div>Gross Earnings</div>
                    <div><b>{gross}</b></div>
                  </div>
                </div>

                <div className='pc-5-col1'>
                  <div className='pc-5-col1-1'>
                    <div>Deduction</div><div>Amount</div>
                  </div>

                  <div className='pc-5-col1-2'>
                    <div>Income Tax</div>
                    <div>{tax}</div>
                  </div>

                  <div className='pc-5-col1-5'>

                  </div>

                  <div className='pc-5-col1-3'>
                    <div>Total Deduction</div>
                    <div><b>{totalDeduction}</b></div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* NET PAY */}
            <div className='pc-6'>
              <div>
                <h1>TOTAL NET PAYABLE</h1>
                <p>Gross Earnings - Total Deduction</p>
              </div>
              <div className='total-pay'>
                ₹{netPay}
              </div>
            </div>

            <hr></hr>

            <div className='acknowledged-container'>
                <h2>ACKNOWLEDGED BY,</h2>
                <div className='ac-c-1'>
                    <div className='ac-col1'>
                        <div></div>
                        <h3>{name}</h3>
                        <p>Employee, VETRI IT SYSTEMS PVT LTD.,</p>
                    </div>
                    <div className='ac-col1'> 
                        <div></div>
                        <h3>AUTHORISED NAME</h3>
                        <p>Managing Director, VETRI IT SYSTEMS PVT LTD.,</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PayslipReview
