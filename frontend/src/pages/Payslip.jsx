import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Payslip.css'
import logo from '../assets/Images/vislogo.png'

function Payslip() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    month: '',
    name: '',
    paidDays: '',
    empId: '',
    lop: '',
    payPeriod: '',
    paymentDate: '',
    basic: '',
    incentive: '',
    tax: ''
  })

  const handleLogout = () => {
    navigate('/')
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const basic = Number(data.basic) || 0
  const incentive = Number(data.incentive) || 0
  const tax = Number(data.tax) || 0

  const gross = basic + incentive
  const totalDeduction = tax
  const netPay = gross - totalDeduction

  const generatePayslip = () => {
    const payslipData = {
      ...data,
      gross,
      totalDeduction,
      netPay
    }

    localStorage.setItem('payslip', JSON.stringify(payslipData))
    alert('Payslip Saved Successfully ✅')
    navigate('/payslipreview')
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
          <h1>Generate Payslip</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* BODY */}
      <div className='payslip-container2'>
        <h1>EMPLOYEE PAYSLIP GENERATOR</h1>

        <div className='payslip-container-3'>
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
              <input
                name="month"
                placeholder="Month Year"
                onChange={handleChange}
              />
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
                  <div><input name="name" onChange={handleChange} /></div>
                </div>

                <div className='pc4-1'>
                  <div>Employee ID</div><div>:</div>
                  <div><input name="empId" onChange={handleChange} /></div>
                </div>

                <div className='pc4-1'>
                  <div>Pay Period</div><div>:</div>
                  <div><input name="payPeriod" onChange={handleChange} /></div>
                </div>
              </div>

              <div>
                <div className='pc4-1'>
                  <div>Paid Days</div><div>:</div>
                  <div><input name="paidDays" onChange={handleChange} /></div>
                </div>

                <div className='pc4-1'>
                  <div>Loss of Pay Days</div><div>:</div>
                  <div><input name="lop" onChange={handleChange} /></div>
                </div>

                <div className='pc4-1'>
                  <div>Payment Date</div><div>:</div>
                  <div><input name="paymentDate" onChange={handleChange} /></div>
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
                    <div><input name="basic" onChange={handleChange} /></div>
                  </div>

                  <div className='pc-5-col1-2'>
                    <div>Incentive</div>
                    <div><input name="incentive" onChange={handleChange} /></div>
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
                    <div><input name="tax" onChange={handleChange} /></div>
                  </div>
                  <div className='pc-5-col1-5'>
                    <div>Income Tax applicable for all employees*</div>
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
          </div>

          <hr />

          <button className='generte-payslip' onClick={generatePayslip}>
            Generate Payslip
          </button>

        </div>
      </div>
    </div>
  )
}

export default Payslip
