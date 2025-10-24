// app/page.js
"use client";

import { useMemo, useState, useEffect } from "react";



export default function Page() {


  const waktuSekarang = useMemo(() => {
    const tz = "Asia/Makassar";
    const d = new Date();
    const tanggal = new Intl.DateTimeFormat("id-ID", {
      timeZone: tz, day: "2-digit", month: "long", year: "numeric",
    }).format(d);
    const jamMenit = new Intl.DateTimeFormat("id-ID", {
      timeZone: tz, hour: "2-digit", minute: "2-digit",
    }).format(d);
    return `${tanggal} pukul ${jamMenit}`;
  }, []);


  const data = {
    West: {
      "PIT 13HW": [
        { egi: "PC2000-8", loader: "EX1827" },
        { egi: "PC2000-8", loader: "EX1848" },
        { egi: "PC2000-11", loader: "EX1873" },
        { egi: "PC2000-11", loader: "EX1875" },
      ],
      "PIT 24": [
        { egi: "PC1250-11", loader: "EX1237" },
        { egi: "PC1250-11", loader: "EX1258" },
      ]
    },
    East: {
      "PIT 19AN": [
        { egi: "PC2000-8", loader: "EX1745" },
        { egi: "PC2000-8", loader: "EX1832" },
        { egi: "PC2000-11", loader: "EX1868" },
        { egi: "PC2000-11", loader: "EX1870" },
        { egi: "PC2000-11", loader: "EX1879" },
        { egi: "PC1250-11", loader: "EX1220" },
        { egi: "PC2000-8", loader: "EX1835" },
        { egi: "PC2000-11", loader: "EX1851" },
        { egi: "PC2000-8", loader: "EX1882" },
      ],
      "PIT 19S": [
        { egi: "PC2000-8", loader: "EX1753" },
        { egi: "PC2000-8", loader: "EX1784" },
        { egi: "PC1250-11", loader: "EX1299" },
        { egi: "PC1250-11", loader: "EX1152" },
      ],
      "PIT 19AS": [
        { egi: "PC2000-11", loader: "EX1891" },
        { egi: "PC2000-11", loader: "EX1845" },
        { egi: "PC2000-8", loader: "EX1805" },
        { egi: "PC1250-11", loader: "EX1177" },
        { egi: "PC2000-11", loader: "EX1279" },
      ],
    },
  };

  const pdtyHaulerConv = [
    { meter: 200, km: 0.2, konversi: 2.160 },
    { meter: 300, km: 0.3, konversi: 1.830 },
    { meter: 400, km: 0.4, konversi: 1.600 },
    { meter: 500, km: 0.5, konversi: 1.482 },
    { meter: 600, km: 0.6, konversi: 1.342 },
    { meter: 700, km: 0.7, konversi: 1.231 },
    { meter: 800, km: 0.8, konversi: 1.140 },
    { meter: 900, km: 0.9, konversi: 1.064 },
    { meter: 1000, km: 1.0, konversi: 1.000 },
    { meter: 1100, km: 1.1, konversi: 0.945 },
    { meter: 1200, km: 1.2, konversi: 0.898 },
    { meter: 1300, km: 1.3, konversi: 0.856 },
    { meter: 1400, km: 1.4, konversi: 0.820 },
    { meter: 1500, km: 1.5, konversi: 0.787 },
    { meter: 1600, km: 1.6, konversi: 0.758 },
    { meter: 1700, km: 1.7, konversi: 0.732 },
    { meter: 1800, km: 1.8, konversi: 0.708 },
    { meter: 1900, km: 1.9, konversi: 0.687 },
    { meter: 2000, km: 2.0, konversi: 0.667 },
    { meter: 2100, km: 2.1, konversi: 0.649 },
    { meter: 2200, km: 2.2, konversi: 0.632 },
    { meter: 2300, km: 2.3, konversi: 0.617 },
    { meter: 2400, km: 2.4, konversi: 0.603 },
    { meter: 2500, km: 2.5, konversi: 0.590 },
    { meter: 2600, km: 2.6, konversi: 0.578 },
    { meter: 2700, km: 2.7, konversi: 0.566 },
    { meter: 2800, km: 2.8, konversi: 0.555 },
    { meter: 2900, km: 2.9, konversi: 0.545 },
    { meter: 3000, km: 3.0, konversi: 0.536 },
    { meter: 3100, km: 3.1, konversi: 0.527 },
    { meter: 3200, km: 3.2, konversi: 0.519 },
    { meter: 3300, km: 3.3, konversi: 0.511 },
    { meter: 3400, km: 3.4, konversi: 0.504 },
    { meter: 3500, km: 3.5, konversi: 0.497 },
    { meter: 3600, km: 3.6, konversi: 0.490 },
    { meter: 3700, km: 3.7, konversi: 0.483 },
    { meter: 3800, km: 3.8, konversi: 0.477 },
    { meter: 3900, km: 3.9, konversi: 0.469 },
    { meter: 4000, km: 4.0, konversi: 0.461 },
    { meter: 4100, km: 4.1, konversi: 0.454 },
    { meter: 4200, km: 4.2, konversi: 0.447 },
    { meter: 4300, km: 4.3, konversi: 0.440 },
    { meter: 4400, km: 4.4, konversi: 0.433 },
    { meter: 4500, km: 4.5, konversi: 0.427 },
    { meter: 4600, km: 4.6, konversi: 0.420 },
    { meter: 4700, km: 4.7, konversi: 0.412 },
    { meter: 4800, km: 4.8, konversi: 0.405 },
    { meter: 4900, km: 4.9, konversi: 0.399 },
    { meter: 5000, km: 5.0, konversi: 0.392 },
    { meter: 5100, km: 5.1, konversi: 0.386 },
    { meter: 5200, km: 5.2, konversi: 0.379 },
    { meter: 5300, km: 5.3, konversi: 0.373 },
    { meter: 5400, km: 5.4, konversi: 0.368 },
    { meter: 5500, km: 5.5, konversi: 0.362 },
    { meter: 5600, km: 5.6, konversi: 0.357 },
    { meter: 5700, km: 5.7, konversi: 0.352 },
    { meter: 5800, km: 5.8, konversi: 0.347 },
    { meter: 5900, km: 5.9, konversi: 0.342 },
    { meter: 6000, km: 6.0, konversi: 0.337 },
    { meter: 6100, km: 6.1, konversi: 0.332 },
    { meter: 6200, km: 6.2, konversi: 0.328 },
  ];


  const [block, setBlock] = useState(null);
  const [pit, setPit] = useState("");
  const [egi, setEgi] = useState("");
  const [loader, setLoader] = useState("");

  const pits = useMemo(() => (block ? Object.keys(data[block]) : []), [block]);
  const rows = useMemo(() => (block && pit ? data[block][pit] : []), [block, pit]);
  const egis = useMemo(() => [...new Set(rows.map(r => r.egi))], [rows]);
  const loaders = useMemo(
    () => rows.filter(r => !egi || r.egi === egi).map(r => r.loader),
    [rows, egi]
  );

  const [jarak, setJarak] = useState("");
  const [totalHd, setTotalHd] = useState("");
  const [loadingTime, setLoadingTime] = useState("");
  const [ritaseTime, setRitaseTime] = useState("");


  const [ctPlan, setCtPlan] = useState("-");
  const [ctAct, setCtAct] = useState("-");
  const [totalRit, setTotalRit] = useState("-");
  const [mf, setMf] = useState("-");
  const [prdtyLoader, setPrdtyLoader] = useState("-");
  const [prdtyHauler, setPrdtyHauler] = useState("-");


  const cards = [
    { title: "CT Plan", unit: "", value: ctPlan, color: "teal" },
    { title: "CT Aktual", unit: "", value: ctAct, color: "teal" },
    { title: "Total Ritasi", unit: "", value: totalRit, color: "sky" },
    { title: "Match Factor", unit: "", value: mf, color: "teal" },
    { title: "Productivity Loader", unit: "", value: prdtyLoader, color: "rose" },
    { title: "Productivity Hauler", unit: "", value: prdtyHauler, color: "fuchsia" },
  ];


  const colorMap = {
    teal: "bg-teal-500/10 text-teal-400",
    sky: "bg-sky-500/10 text-sky-400",
    teal: "bg-teal-500/10 text-teal-400",
    rose: "bg-rose-500/10 text-rose-400",
    fuchsia: "bg-fuchsia-500/10 text-fuchsia-400",
  };

  const handleChange = (setter, val) => {
    setter(val);
  };

  useEffect(() => {
    if (jarak && pit && egi) {
      processCtPlan();
    } else {
      setCtPlan(0);
    }

    if (loadingTime && ritaseTime) {
      processCtAct();
      if (totalHd > 0) {
        processTotalRitasi();
        processMf();
        prodtyLoader();
        prodtyHauler();
      }


    } else {
      setCtAct(0)
      setTotalRit(0);
      setMf(0);
      setPrdtyHauler(0);
      setPrdtyLoader(0);
    }


  }, [jarak, totalHd, loadingTime, ritaseTime, ctAct, totalRit, egi, pit]);

  const processCtPlan = () => {

    let planSpeed = 0;
    let planLoadingTime = 0;

    switch (egi) {
      case "PC2000-11":
        planLoadingTime = 2.4;
        break;
      case "PC2000-8":
        planLoadingTime = 2.6;
        break;
      case "PC1250-11":
        planLoadingTime = 3.5;
        break;
      case "PC1250-8":
        planLoadingTime = 4;
        break;
      default:
        planLoadingTime = 0;
        break;
    }

    switch (pit) {
      case "PIT 13HW":
        planSpeed = 27.34;
        break;
      case "PIT 24":
        planSpeed = 22.34;
        break;
      case "PIT 19AN":
        planSpeed = 23.88;
        break;
      case "PIT 19AS":
        planSpeed = 23.53;
        break;
      case "PIT 19S":
        planSpeed = 24.67;
        break;
      default:
        planSpeed = 0;
        break;
    }


    let _ctPlan = ((2 * jarak) / planSpeed * 60) + planLoadingTime + 0.5
    console.log([planSpeed, planLoadingTime]);
    setCtPlan(_ctPlan.toFixed(1));
  };

  const processCtAct = () => {
    let _ctAct = Number(ritaseTime) + Number(loadingTime);
    setCtAct(_ctAct);

  };

  const processTotalRitasi = () => {
    let _totalRit = (60 / ctAct) * totalHd;
    setTotalRit(_totalRit.toFixed(1));
  }

  const processMf = () => {
    let _matchFactor = (totalHd * loadingTime) / ctAct;
    setMf(_matchFactor.toFixed(2));
  }


  const prodtyLoader = () => {
    let _prodtyLoader = totalRit * 42;
    setPrdtyLoader(_prodtyLoader.toFixed(2));
  }

  const prodtyHauler = () => {
    let convPdtyHauler = pdtyHaulerConv.find(d => d.km == jarak);

    if (!convPdtyHauler) {
      console.warn("⚠️ No matching km found for:", targetKm);
      return;
    }

    let _prodtyHauler = (60 / ctAct) * 42 / convPdtyHauler.konversi;
    setPrdtyHauler(_prodtyHauler.toFixed(2));
  }

  return (

    <main className="flex-grow">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-teal-800 shadow-md p-6 rounded-lg border border-teal-200">
              <h3 className="text-l text-center font-semibold mb-6 text-white">Silakan cari Unit Loader yang akan dihitung!</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">

                <div className="space-y-3 w-full max-w-sm mx-auto">
                  <div className="flex gap-2 bg-teal-100 p-1 rounded-md">
                    {["West", "East"].map(b => (
                      <button
                        key={b}
                        onClick={() => { setBlock(b); setPit(""); setEgi(""); setLoader(""); }}
                        className={`flex-1 py-2 rounded-md font-semibold transition
                        ${block === b ? "bg-teal-500 text-white" : "text-teal-700 hover:bg-teal-200"}`}
                      >
                        {b} Block
                      </button>
                    ))}
                  </div>

                  {block && (
                    <select
                      className="w-full p-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                      value={pit}
                      onChange={e => { setPit(e.target.value); setEgi(""); setLoader(""); }}
                    >
                      <option value="">Select Pit</option>
                      {pits.map(p => <option key={p}>{p}</option>)}
                    </select>
                  )}

                  {pit && (
                    <select
                      className="w-full p-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                      value={egi}
                      onChange={e => setEgi(e.target.value)}
                    >
                      <option value="">All EGI</option>
                      {egis.map(e => <option key={e}>{e}</option>)}
                    </select>
                  )}

                  {pit && (
                    <select
                      className="w-full p-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                      value={loader}
                      onChange={e => setLoader(e.target.value)}
                    >
                      <option value="">Select Unit Loader</option>
                      {loaders.map(l => <option key={l}>{l}</option>)}
                    </select>
                  )}
                </div>
              </div>
            </div>
            {loader && (<div className="bg-teal-800 shadow-md p-6 rounded-lg border border-teal-200">
              <h3 className="text-l text-center font-semibold mb-6 text-white">Silakan input parameter berikut!</h3>
              <div className="mb-3 relative">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Masukan Jarak...."
                    className="flex-1 p-2 border rounded-lg rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                    value={jarak}
                    onChange={(e) => handleChange(setJarak, e.target.value)}
                  />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-500 text-sm" aria-hidden="true">Km</span>
              </div>
              <div className="mb-3 relative" >
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Masukan Jumlah HD..."
                    className="flex-1 p-2 border rounded-lg rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                    value={totalHd}
                    onChange={(e) => handleChange(setTotalHd, e.target.value)}
                  />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-500 text-sm" aria-hidden="true">Unit</span>
              </div>
              <div className="mb-3 relative">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Masukan Waktu Loading..."
                    className="flex-1 p-2 border rounded-lg rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                    value={loadingTime}
                    onChange={(e) => handleChange(setLoadingTime, e.target.value)}
                  />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-500 text-sm" aria-hidden="true">Menit</span>
              </div>
              <div className="mb-3 relative">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Masukan waktu travel 1 rit..."
                    className="flex-1 p-2 border rounded-lg rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-400"
                    value={ritaseTime}
                    onChange={(e) => handleChange(setRitaseTime, e.target.value)}
                  />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-500 text-sm" aria-hidden="true">Menit</span>
              </div>
            </div>
            )}

            {(<div className="bg-teal-800 shadow-md p-6 rounded-lg border border-teal-200">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {cards.map((c) => (
                  <div
                    key={c.title}
                    className="bg-teal-800 shadow-sm p-3 sm:p-4 rounded-lg border border-teal-200 flex items-center"
                  >
                    <div className={`p-2 sm:p-3 rounded-full mr-3 sm:mr-4 ${colorMap[c.color]}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>

                    <div className="flex-grow overflow-hidden">
                      <p className="text-[11px] sm:text-xs text-white leading-tight">{c.title}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-base sm:text-lg font-bold text-white break-words">
                          <span>{c.value}</span>

                          {(c.title === "CT Plan" || c.title === "CT Aktual") && (
                            <span className="text-[10px] sm:text-xs font-normal text-white ml-1">
                              Menit
                            </span>
                          )}

                          {c.title === "Total Ritasi" && (
                            <span className="text-[10px] sm:text-xs font-normal text-white ml-1">
                              Rit
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
