
import { PrinterProvider } from '../../contexts/PrinterContext.jsx';
import { PrintRequestContent } from "./PrintRequestContent.jsx"

export default function HomePage() {

    return (
        <PrinterProvider>
            <PrintRequestContent />
        </PrinterProvider>
    );
}

