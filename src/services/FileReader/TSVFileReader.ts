import FileReader, { FileReaderProps } from ".";
import * as d3 from "d3";

interface TSVFileReaderProps extends FileReaderProps {}

export default class TSVFileReader extends FileReader<d3.DSVRowArray<string>> {

    constructor(props: TSVFileReaderProps ) {
        super(props);
    }

    public async read(): Promise<d3.DSVRowArray<string>> {
        return await d3.tsv(this.src);
    }

}