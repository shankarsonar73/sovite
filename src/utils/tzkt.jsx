// // TODO 8 - Fetch storage of the Lottery by completing fetchStorage

// import axios from "axios";

// export const fetchStorage = async () => {
//     const res = await axios.get(
//         "https://api.ghostnet.tzkt.io/v1/contracts/KT1WT6AjrzNhUqXZgc2JVE8bvRgb9WmkUXrT/storage"
//     );
//     return res.data;
// };

import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1TNE7pfAggMKxFqpa5gjQYPYB6nnkdzcAX/storage"
    );
    return res.data;
};