
import { TableCell, TableHead, TableRow } from '@mui/material';

const ModelTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>模型</TableCell>
        {/* <TableCell>按次计费</TableCell> */}
        <TableCell>模型倍率</TableCell>
        <TableCell>补全倍率</TableCell>
        <TableCell>按Token输入 /1K</TableCell>
        <TableCell>按Token输出 /1K</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ModelTableHead;
