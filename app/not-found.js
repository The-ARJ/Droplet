import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-8">
                <Image src="/assets/404.svg" alt="404 Error" width={400} height={400} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-500 text-lg text-center mb-8">
                The page you are looking for doesn't exist.
            </p>
            <Link href="/">
                <p className="flex items-center justify-center px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M9.707 4.293a1 1 0 00-1.414 0L4 8.586V7a1 1 0 00-2 0v6a1 1 0 001 1h6a1 1 0 000-2H5.414l4.293-4.293a1 1 0 10-1.414-1.414L3.586 12l6.707 6.707a1 1 0 001.414-1.414L6.414 13h6a1 1 0 000-2H7a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L9.414 14h6a1 1 0 000-2h-6.586l2.293-2.293a1 1 0 00-1.414-1.414L9.707 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Return Home
                </p>
            </Link>
        </div>
    );
};

export default NotFound;
