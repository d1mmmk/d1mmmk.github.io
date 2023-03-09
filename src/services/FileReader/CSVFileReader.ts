import FileReader, { FileReaderProps } from ".";
import * as d3 from "d3";

interface CSVFileReaderProps extends FileReaderProps {}

export default class CSVFileReader extends FileReader<d3.DSVRowArray<string>> {

    constructor(props: CSVFileReaderProps ) {
        super(props);
    }

    public async read(): Promise<d3.DSVRowArray<string>> {
        return await d3.csv(this.src);
    }

}