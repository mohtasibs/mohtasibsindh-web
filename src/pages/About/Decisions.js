import React, { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";

const Decisions = () => {
    // Data for different dates
    const decisionsData = {
        "5 Nov 2024": [
            { title: "140.2023.RM-02.N-05", file: "/pdfs/140.2023.RM-02.N-05.pdf" },
            { title: "3466.2024.N-20", file: "/pdfs/3466.2024.N-20.pdf" },
            { title: "3169.2024.R", file: "/pdfs/3169.2024.R.pdf" },
            { title: "1726.2024.KC.N.2021", file: "/pdfs/1726.2024.KC.N.2021.pdf" },
            { title: "1156.KHE.48.2022", file: "/pdfs/1156.KHE.48.2022.pdf" },
            { title: "462.KE.36.2023", file: "/pdfs/462.KE.36.2023.pdf" },
            { title: "6519.KE.362.2022", file: "/pdfs/6519.KE.362.2022.pdf" },
            { title: "6884.2023.DG-I", file: "/pdfs/6884.2023.DG-I.pdf" },
            { title: "9484.KE.577.2023", file: "/pdfs/9484.KE.577.2023.pdf" },
            { title: "9999.KE.599.2023", file: "/pdfs/9999.KE.599.2023.pdf" },
            { title: "4652.2021.DG-I", file: "/pdfs/4652.2021.DG-I(2).pdf" },
        ],
        "6 Nov 2024": [
            { title: "7040.2021.HYD.2022.27", file: "/pdfs/7040.2021.HYD.2022.27.pdf" },
            { title: "ROM.93.2024.RM-83", file: "/pdfs/ROM.93.2024.RM-83.pdf" },
            { title: "ROM.120.2024.RM-107", file: "/pdfs/ROM.120.2024.RM-107.pdf" },
            { title: "621.2024.KR-15", file: "/pdfs/621.2024.KR-15.pdf" },
            { title: "2059.2024.RM-66", file: "/pdfs/2059.2024.RM-66.pdf" },
        ],
        "7 Nov 2024": [
            { title: "3382.ROK-65.(Khp).2022", file: "/pdfs/382.ROK-65.(Khp).2022.pdf" },
            { title: "3116.2022.NFZ-25", file: "/pdfs/3116.2022.NFZ-25.pdf" },
            { title: "2893.23.NFZ-31", file: "/pdfs/2893.23.NFZ-31.pdf" },
            { title: "2161.ROK-35.(Khp).2022", file: "/pdfs/2161.ROK-35.(Khp).2022.pdf" },
        ],
        "8 Nov 2024": [
            { title: "2378.2022.KC", file: "/pdfs/2378.2022.KC.pdf" },
            { title: "249.2024.KC", file: "/pdfs/249.2024.KC (2).pdf" },
            { title: "9924.2023.KC", file: "/pdfs/9924.2023.KC.pdf" },
            { title: "8816.RL-370(LKA).2023", file: "/pdfs/8816.RL-370(LKA).2023.pdf" },
            { title: "5268.2022.HYD.345", file: "/pdfs/5268.2022.HYD.345.pdf" },
        ],
        "11 Nov 2024": [
            { title: "POS.849.SKK-08.2022", file: "/pdfs/POS.849.SKK-08.2022.pdf" },
            { title: "POS.9011.SKK-169.2023", file: "/pdfs/POS.9011.SKK-169.2023.pdf" },
        ],
        "12 Nov 2024": [
            { title: "POS.5348.2023.HYD.324", file: "/pdfs/POS.5348.2023.HYD.324.pdf" },
            { title: "POS.2042.2023.HYD.173", file: "/pdfs/POS.2042.2023.HYD.173.pdf" },
            { title: "POS.660.GTK-30.2024", file: "/pdfs/POS.660.GTK-30.2024.pdf" },
        ],
        "18 Nov 2024": [
            { title: "POS.RL-321(LKA)2024", file: "/pdfs/POS.RL-321(LKA)2024-d.pdf" },
            { title: "POS.CH.7015.2021", file: "/pdfs/POS.CH.7015.2021-d.pdf" },
            { title: "POS.CH.5447.2020.RM-54", file: "/pdfs/POS.CH.5447.2020.RM-54-d.pdf" },
            { title: "POS.9088.2023.RM-229", file: "/pdfs/POS.9088.2023.RM-229-d.pdf" },
            { title: "POS.7023.RL-287(LKA)2023", file: "/pdfs/POS.7023.RL-287(LKA)2023-d.pdf" },
            { title: "POS.4255.KE-312.2023", file: "/pdfs/POS.4255.KE-312.2023-d.pdf" },
            { title: "POS.3789.2024.RM-119", file: "/pdfs/POS.3789.2024.RM-119-d.pdf" },
            { title: "POS.1899.RL.69.(LKA)2024", file: "/pdfs/POS.1899.RL.69.(LKA)2024-d.pdf" },
        ],
        "21 Nov 2024": [
            { title: "POS.3789.2024.RM-119", file: "/pdfs/POS.3789.2024.RM-119.pdf" },
            { title: "POS.3763.KE-292.2024", file: "/pdfs/POS.3763.KE-292.2024.pdf" },
            { title: "POS.3220.KE-198.2023", file: "/pdfs/POS.3220.KE-198.2023.pdf" },
            { title: "POS.3197.2024.KC.F-174", file: "/pdfs/POS.3197.2024.KC.F-174.pdf" },
            { title: "POS.2234.KE.87.2021 (30 CASES)", file: "/pdfs/POS.2234.KE.87.2021 (30 CASES).pdf" },
            { title: "POS.1899.RL-69(LKA)2023", file: "/pdfs/POS.1899.RL-69(LKA)2023.pdf" },
            { title: "POS.1793.ROJ-72(JBD).2023", file: "/pdfs/POS.1793.ROJ-72(JBD).2023.pdf" },
            { title: "POS.1669.KE.111.2024", file: "/pdfs/POS.1669.KE.111.2024.pdf" },
            { title: "POS.1617.2023.NWS-19", file: "/pdfs/POS.1617.2023.NWS-19.pdf" },
            { title: "POS.38.2024.KM.KW", file: "/pdfs/POS.38.2024.KM.KW.pdf" },

            { title: "POS.RL-321(LKA)2024", file: "/pdfs/POS.RL-321(LKA)2024.pdf" },
            { title: "POS.CH-8231.KHE-468.2022.KR", file: "/pdfs/POS.CH-8231.KHE-468.2022.KR.pdf" },
            { title: "POS.CH.7015.2021", file: "/pdfs/POS.CH.7015.2021.pdf" },
            { title: "POS.CH.5447.20.RM-54", file: "/pdfs/POS.CH.5447.20.RM-54.pdf" },
            { title: "POS.9128.2023.SGR-114", file: "/pdfs/POS.9128.2023.SGR-114.pdf" },

            { title: "POS.8485.KE.510.2023", file: "/pdfs/POS.8485.KE.510.2023.pdf" },
            { title: "POS.7483.2023.KW.KM", file: "/pdfs/POS.7483.2023.KW.KM.pdf" },
            { title: "POS.7401.2022.B-82.J", file: "/pdfs/POS.7401.2022.B-82.J.pdf" },
            { title: "POS.7121.KE-397.2022", file: "/pdfs/POS.7121.KE-397.2022.pdf" },
            { title: "POS.7023.RL-287(LKA)2023", file: "/pdfs/POS.7023.RL-287(LKA)2023.pdf" },

            { title: "POS.6002.KE-335.2022", file: "/pdfs/POS.6002.KE-335.2022.pdf" },
            { title: "POS.4255.KE-312.2023", file: "/pdfs/POS.38.2024.KM.KW.pdf" },
            { title: "POS.9088.2023.RM-229", file: "/pdfs/POS.9088.2023.RM-229.pdf" },
            { title: "POS.5376.GTK-119.2023", file: "/pdfs/POS.5376.GTK-119.2023.pdf" },
            { title: "POS.3920.KE.306.2024", file: "/pdfs/POS.3920.KE.306.2024.pdf" },
        ],
        "29 Nov 2024": [
            { title: "POS.06.2015.NFZ-03", file: "/pdfs/POS.06.2015.NFZ-03.pdf" },
            { title: "POS.48.ROJ-48(JBD).2024", file: "/pdfs/POS.48.ROJ-48(JBD).2024.pdf" },
            { title: "POS.183.2024.N-01", file: "/pdfs/POS.183.2024.N-01.pdf" },
            { title: "POS.618.2022.HYD.75", file: "/pdfs/POS.618.2022.HYD.75.pdf" },
            { title: "POS.750.2022.HYD.85", file: "/pdfs/POS.750.2022.HYD.85.pdf" },
            { title: "POS.2284.ROG-22.GTK.2022", file: "/pdfs/POS.2284.ROG-22.GTK.2022.pdf" },
            { title: "POS.2415.2021.HYD.100", file: "/pdfs/POS.2415.2021.HYD.100.pdf" },
            { title: "POS.2498.ROG.26.GTK.2022", file: "/pdfs/POS.2498.ROG.26.GTK.2022.pdf" },
            { title: "POS.3034.2024.KM.KW", file: "/pdfs/POS.3034.2024.KM.KW.pdf" },
            { title: "POS.3062.KR-64.2024", file: "/pdfs/POS.3062.KR-64.2024.pdf" },

            { title: "POS.4168.2022.HYD.281", file: "/pdfs/POS.4168.2022.HYD.281.pdf" },
            { title: "POS.4550.2022.HYD.287.KR", file: "/pdfs/POS.4550.2022.HYD.287.pdf" },
            { title: "POS.4551.2022.HYD.299", file: "/pdfs/POS.4551.2022.HYD.299.pdf" },
            { title: "POS.4593.2021.NWS-68.SGR-07", file: "/pdfs/POS.4593.2021.NWS-68.SGR-07.pdf" },
            { title: "POS.4768.2023.HYD.296", file: "/pdfs/POS.4768.2023.HYD.296.pdf" },

            { title: "POS.5127.2021.RM-79", file: "/pdfs/POS.5127.2021.RM-79.pdf" },
            { title: "POS.6447.2022.HYD.398", file: "/pdfs/POS.6447.2022.HYD.398.pdf" },
            { title: "POS.3105.KE-205.2024", file: "/pdfs/POS.3105.KE-205.2024.pdf" },
            { title: "POS.3936.KHE-477.16", file: "/pdfs/POS.3936.KHE-477.16.pdf" },
            { title: "POS.4109.2024.N-24", file: "/pdfs/POS.4109.2024.N-24.pdf" },

            { title: "POS.9235.ROG-177.GTK.2023", file: "/pdfs/POS.9235.ROG-177.GTK.2023.pdf" },
            { title: "POS.9236.ROG-178-GTK.2023", file: "/pdfs/POS.9236.ROG-178-GTK.2023.pdf" },
            { title: "POS.9340.KE.571.2023", file: "/pdfs/POS.9340.KE.571.2023.pdf" },
            { title: "POS.CH.3931.KE.310.2024", file: "/pdfs/POS.CH.3931.KE.310.2024.pdf" },
            { title: "POS.GTK-51.2024", file: "/pdfs/POS.GTK-51.2024.pdf" },
            { title: "POS.ROM.130.2024.RM-113", file: "/pdfs/POS.ROM.130.2024.RM-113.pdf" },
            { title: "POS.ROM.160.2024.RM-140", file: "/pdfs/POS.ROM.160.2024.RM-140.pdf" },
            { title: "POS.8203.KE.464.2022", file: "/pdfs/POS.8203.KE.464.2022.pdf" },
        ],
        "3 Dec 2024": [
            { title: "POS.2139.2024.RM-72", file: "/pdfs/POS.2139.2024.RM-72.pdf" },
            { title: "POS.1014.24.HYD.101.J.NWS-79.R", file: "/pdfs/POS.1014.24.HYD.101.J.NWS-79.R.pdf" },
            { title: "POS.1055.2021.NWS-16.SGR-03", file: "/pdfs/POS.1055.2021.NWS-16.SGR-03.pdf" },
            { title: "POS.814.2024.HYD.82.F-163", file: "/pdfs/POS.814.2024.HYD.82.F-163.pdf" },
            { title: "POS.729.2022.HYD.77", file: "/pdfs/POS.729.2022.HYD.77.pdf" },
            { title: "POS.657.SKK-08.2023", file: "/pdfs/POS.657.SKK-08.2023.pdf" },
            { title: "POS.77.2024", file: "/pdfs/POS.77.2024.pdf" },
            { title: "POS.47.ROJ-47(JBD)2024", file: "/pdfs/POS.47.ROJ-47(JBD)2024.pdf" },
            { title: "POS.46.ROJ-46(JBD).2024", file: "/pdfs/POS.46.ROJ-46(JBD).2024.pdf" },
            { title: "POS.16.2024.KC.F-178", file: "/pdfs/POS.16.2024.KC.F-178.pdf" },

            { title: "POS.3979.KE.313.2024", file: "/pdfs/POS.3979.KE.313.2024.pdf" },
            { title: "POS.3790.2023.37.G", file: "/pdfs/POS.3790.2023.37.G.pdf" },
            { title: "POS.3703.2022.ADV-I", file: "/pdfs/POS.3703.2022.ADV-I.pdf" },
            { title: "POS.3688.2021.K-17", file: "/pdfs/POS.3688.2021.K-17.pdf" },
            { title: "POS.3404.2024.N-18", file: "/pdfs/POS.3404.2024.N-18.pdf" },

            { title: "POS.3242.2024.R", file: "/pdfs/POS.3242.2024.R.pdf" },
            { title: "POS.3223.KE.225.2024", file: "/pdfs/POS.3223.KE.225.2024.pdf" },
            { title: "POS.2291.GTK-71.2024", file: "/pdfs/POS.2291.GTK-71.2024.pdf" },
            { title: "POS.2211.2024.K-10", file: "/pdfs/POS.2211.2024.K-10.pdf" },
            { title: "POS.2209.2024.KC.F-165", file: "/pdfs/POS.2209.2024.KC.F-165.pdf" },

            { title: "POS.ROS.SSK-83.2024", file: "/pdfs/POS.ROS.SSK-83.2024.pdf" },
            { title: "POS.ROS.SKK-147.2024", file: "/pdfs/POS.ROS.SKK-147.2024.pdf" },
            { title: "POS.ROG.GTK-06.2020", file: "/pdfs/POS.ROG.GTK-06.2020.pdf" },
            { title: "POS.9438.KE-574.2023", file: "/pdfs/POS.9438.KE-574.2023.pdf" },
            { title: "POS.7257.2023.NWS-143", file: "/pdfs/POS.7257.2023.NWS-143.pdf" },
            { title: "POS.6920.KE-335.2021", file: "/pdfs/POS.6920.KE-335.2021.pdf" },
            { title: "POS.6853.2022.B-80", file: "/pdfs/POS.6853.2022.B-80.pdf" },
            { title: "POS.5198.2019.F", file: "/pdfs/POS.5198.2019.F.pdf" },
            { title: "POS.5103.2023.B-48", file: "/pdfs/POS.5103.2023.B-48.pdf" },
            { title: "POS.4718.KE.260.2022", file: "/pdfs/POS.4718.KE.260.2022.pdf" },
            { title: "POS.4543.2024.K-26", file: "/pdfs/POS.4543.2024.K-26.pdf" },
            { title: "POS.4059.2022.HYD.275", file: "/pdfs/POS.4059.2022.HYD.275.pdf" },
        ],
        "10 Dec 2024": [
            { title: "POS.2615.2023.NWS-79.SGR-39", file: "/pdfs/POS.2615.2023.NWS-79.SGR-39.pdf" },
            { title: "POS.2593.2024.J-17", file: "/pdfs/POS.2593.2024.J-17.pdf" },
            { title: "POS.2281.2024.10.G", file: "/pdfs/POS.2281.2024.10.G.pdf" },
            { title: "POS.2148.KE.150.2024", file: "/pdfs/POS.2148.KE.150.2024.pdf" },
            { title: "POS.1581.2024.SGR-57", file: "/pdfs/POS.1581.2024.SGR-57.pdf" },
            { title: "POS.1385.KE.92.2024", file: "/pdfs/POS.1385.KE.92.2024.pdf" },
            { title: "POS.1282.2024.KC", file: "/pdfs/POS.1282.2024.KC.pdf" },

            { title: "POS.1259.2024.30.KHS.F-191", file: "/pdfs/POS.1259.2024.30.KHS.F-191.pdf" },
            { title: "POS.987.2024.J-08", file: "/pdfs/POS.987.2024.J-08.pdf" },
            { title: "POS.662.GTK-32.2024", file: "/pdfs/POS.662.GTK-32.2024.pdf" },

            { title: "POS.618.2024.KR-11.J-27", file: "/pdfs/POS.618.2024.KR-11.J-27.pdf" },
            { title: "POS.35.2024.KM.KW", file: "/pdfs/POS.35.2024.KM.KW.pdf" },
            { title: "POS.4011.2024.KM.KW", file: "/pdfs/POS.4011.2024.KM.KW.pdf" },
            { title: "POS.3654.2024.KM.KW", file: "/pdfs/POS.3654.2024.KM.KW.pdf" },
            { title: "POS.3575.2024.KN.KW", file: "/pdfs/POS.3575.2024.KN.KW.pdf" },

            { title: "POS.3468.2021.ADV-Z", file: "/pdfs/POS.3468.2021.ADV-Z.pdf" },
            { title: "POS.3453.2023", file: "/pdfs/POS.3453.2023.pdf" },
            { title: "POS.3311.2022.KM.KW", file: "/pdfs/POS.3311.2022.KM.KW.pdf" },
            { title: "POS.3209.2024.KM.KW", file: "/pdfs/POS.3209.2024.KM.KW.pdf" },
            { title: "POS.3161.2024.KM.KW (5 CASES)", file: "/pdfs/POS.3161.2024.KM.KW (5 CASES).pdf" },

            { title: "POS.2810.2024.KC", file: "/pdfs/POS.2810.2024.KC.pdf" },
            { title: "POS.2762.2024.KM.KW", file: "/pdfs/POS.2762.2024.KM.KW.pdf" },
            { title: "POS.RO-NF-06.19.NFZ-52", file: "/pdfs/POS.RO-NF-06.19.NFZ-52.pdf" },
            { title: "POS.ROG.GTK-103.2024", file: "/pdfs/POS.ROG.GTK-103.2024.pdf" },
            { title: "POS.9919.2023.KC", file: "/pdfs/POS.9919.2023.KC.pdf" },

            { title: "POS.8459.2023.KM.KW", file: "/pdfs/POS.8459.2023.KM.KW.pdf" },
            { title: "POS.8107.2022.KM.KEW", file: "/pdfs/POS.8107.2022.KM.KEW.pdf" },
            { title: "POS.7746.2022.KM.KW", file: "/pdfs/POS.7746.2022.KM.KW.pdf" },
            { title: "POS.6249.2024.KC", file: "/pdfs/POS.6249.2024.KC.pdf" },
            { title: "POS.5495.2022.NWS-105.SGR-20", file: "/pdfs/POS.5495.2022.NWS-105.SGR-20.pdf" },
            { title: "POS.4806.2022.HYD.316.R", file: "/pdfs/POS.4806.2022.HYD.316.R.pdf" },
            { title: "POS.4116.2024.KC", file: "/pdfs/POS.4116.2024.KC.pdf" },
        ],

        "11 Dec 2024": [
            { title: "POS.5539.22.NFZ-41", file: "/pdfs/POS.5539.22.NFZ-41.pdf" },
            { title: "POS.4785.ROJ-181(JBD).2023", file: "/pdfs/POS.4785.ROJ-181(JBD).2023.pdf" },
            { title: "POS.4235.2021.KC", file: "/pdfs/POS.4235.2021.KC.pdf" },
            { title: "POS.3948.2022.HYD.282", file: "/pdfs/POS.3948.2022.HYD.282.pdf" },
            { title: "POS.3880.2022.HYD.284", file: "/pdfs/POS.3880.2022.HYD.284.pdf" },
            { title: "POS.3407.RL-236 (LKA).2024", file: "/pdfs/POS.3407.RL-236 (LKA).2024.pdf" },
            { title: "POS.1143.SKK-28.2024", file: "/pdfs/POS.1143.SKK-28.2024.pdf" },

            { title: "POS.449-KE-70.2019.G", file: "/pdfs/POS.449-KE-70.2019.G.pdf" },
            { title: "POS.49.1.2022 (MT) 12.R.THAR.2022", file: "/pdfs/POS.49.1.2022 (MT) 12.R.THAR.2022.pdf" },
            { title: "POS.45.ROJ-45(JBD).2024", file: "/pdfs/POS.45.ROJ-45(JBD).2024.pdf" },

            { title: "POS.31.2024.FGR-114", file: "/pdfs/POS.31.2024.FGR-114.pdf" },
            { title: "POS.KR-19.2024", file: "/pdfs/POS.KR-19.2024.pdf" },
            { title: "POS.8913.2023.HYD.531", file: "/pdfs/POS.8913.2023.HYD.531.pdf" },
            { title: "POS.7499.2022.G", file: "/pdfs/POS.7499.2022.G.pdf" },
            { title: "POS.7474.2023.KC", file: "/pdfs/POS.7474.2023.KC.pdf" },

            { title: "POS.7407.2023", file: "/pdfs/POS.7407.2023.pdf" },
            { title: "POS.6823.ROJ-204(JBD).2023", file: "/pdfs/POS.6823.ROJ-204(JBD).2023.pdf" },
            { title: "POS.6722.2023.HYD.396", file: "/pdfs/POS.6722.2023.HYD.396.pdf" },
            { title: "POS.6538.2021.HYD.2022.07", file: "/pdfs/POS.6538.2021.HYD.2022.07.pdf" },
            { title: "POS.6482.2023.K-20", file: "/pdfs/POS.6482.2023.K-20.pdf" },
            { title: "POS.6339.2022.KC", file: "/pdfs/POS.6339.2022.KC.pdf" },
        ],
        
    };

    const [expandedDate, setExpandedDate] = useState(null);

    const toggleDecisions = (date) => {
        setExpandedDate(expandedDate === date ? null : date);
    };

    return (
        <BaseLayout>
            <div className="container mt-5 pb-5">
                <h1 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "2rem" }}>
                    Decisions
                </h1>

                {Object.keys(decisionsData).map((date) => (
                    <div key={date} className="decision-section">
                        {/* Date Section */}
                        <div className="d-flex align-items-center text-secondary mb-2" style={{ fontSize: "1.25rem" }}>
                            <MdDateRange className="me-2" />
                            <span>{date}</span>
                        </div>

                        {/* Collapsible Button */}
                        <div
                            className="p-3 bg-light rounded shadow-sm text-primary fw-bold d-flex align-items-center justify-content-between"
                            onClick={() => toggleDecisions(date)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: "#f8f9fa",
                                border: "1px solid #dee2e6",
                                fontSize: "1.1rem",
                                marginBottom: "15px",
                                padding: "15px 20px",
                            }}
                        >
                            <div className="d-flex align-items-center">
                                <MdDateRange className="me-2" />
                                <span>{expandedDate === date ? "Hide Decisions" : "Click to View Decisions"}</span>
                            </div>
                        </div>

                        {/* Decisions List */}
                        {expandedDate === date && (
                            <ul className="list-unstyled mt-3 ms-4">
                                {decisionsData[date].map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mt-2">
                                        <AiOutlineFilePdf className="me-2 text-danger" />
                                        <a
                                            href={item.file}
                                            download
                                            className="text-decoration-none text-dark fw-medium"
                                            style={{
                                                fontSize: "1rem",
                                                color: "#dc3545",
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .decision-section {
                    padding-top: 15px;
                }
            `}</style>
        </BaseLayout>
    );
};

export default Decisions;
