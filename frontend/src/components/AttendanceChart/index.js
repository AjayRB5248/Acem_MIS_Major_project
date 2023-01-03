import React from 'react';
import { Bar } from 'react-chartjs-2';

const attendanceData = {
  'EPP': [
    { month: 'Kartik', attendance: 85 },
    { month: 'Mangsir', attendance: 85 },
    { month: 'Poush', attendance: 75 },
    { month: 'Magh', attendance: 65 },
    { month: 'Falgun', attendance: 95 },
  ],
  'I&I': [
    { month: 'Kartik', attendance: 75 },
    { month: 'Mangsir', attendance: 75 },
    { month: 'Poush', attendance: 70 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 90 },
  ],
  'IS': [
    { month: 'Kartik', attendance: 70 },
    { month: 'Mangsir', attendance: 70 },
    { month: 'Poush', attendance: 80 },
    { month: 'Magh', attendance: 85 },
    { month: 'Falgun', attendance: 75 },
  ],
  'Simulation & Modelling': [
    { month: 'Kartik', attendance: 65 },
    { month: 'Mangsir', attendance: 65 },
    { month: 'Poush', attendance: 75 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 70 },
  ],
  'BigData': [
    { month: 'Kartik', attendance: 80 },
    { month: 'Mangsir', attendance: 80 },
    { month: 'Poush', attendance: 70 },
    { month: 'Magh', attendance: 75 },
    { month: 'Falgun', attendance: 85 },
  ],
  'Multimedia': [
    { month: 'Kartik', attendance: 90 },
    { month: 'Mangsir', attendance: 90 },
    { month: 'Poush', attendance: 80 },
    { month: 'Magh', attendance: 85 },
    { month: 'Falgun', attendance: 95 },
  ],
  'Project': [
    { month: 'Kartik', attendance: 75 },
    { month: 'Mangsir', attendance: 75 },
    { month: 'Poush', attendance: 85 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 70 },
  ],
};

const data = {
  labels: attendanceData.EPP.map(entry => entry.month),
  datasets: [
    {
      label: 'EPP',
      data: attendanceData.EPP.map(entry => entry.attendance),
      backgroundColor: 'rgba(255, 0, 0, 1)',
    },
    {
      label: 'I&I',
      data: attendanceData['I&I'].map(entry => entry.attendance),
      backgroundColor: 'rgba(0, 255, 0, 1)',
    },
    {
      label: 'IS',
      data: attendanceData.IS.map(entry => entry.attendance),
      backgroundColor: 'rgba(0, 0, 255, 1)',
    },
    {
      label: 'Simulation & Modelling',
      data: attendanceData['Simulation & Modelling'].map(entry => entry.attendance),
      backgroundColor: 'rgba(255, 255, 0, 1)',
    },
    {
      label: 'BigData',
      data: attendanceData['BigData'].map(entry => entry.attendance),
      backgroundColor:'rgba(0, 255, 255, 1)',
    },
    {
      label: 'Multimedia',
      data: attendanceData.Multimedia.map(entry => entry.attendance),
      backgroundColor: 'rgba(255, 0, 255, 1)',
    },
    {
      label: 'Project',
      data: attendanceData.Project.map(entry => entry.attendance),
      backgroundColor: 'rgba(128, 128, 128, 1)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const AttendanceChart = () => {
  return (
    <Bar data={data} options={options} />
  );
}

export default AttendanceChart;