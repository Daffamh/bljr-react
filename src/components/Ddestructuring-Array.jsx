export default function DateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth() + 1;
  const y = dat.getFullYear();

  return [d, m, y];
}

const [date, month, year] = DateInfo(new Date());

//You can now access each variable separately:
document.getElementById('demo').innerHTML = "The Year is " + year + ", the Month is " + month + ", and the Date is " + date;