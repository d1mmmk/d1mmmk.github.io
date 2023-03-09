
export interface FileReaderProps {
    src: string;
}

export default abstract class FileReader<T> {
    public src: string = '';

    constructor(props: FileReaderProps) {
        this.src = props.src;
    }

    abstract read(): Promise<T>;
}