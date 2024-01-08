import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div> */}
                    <img src="/assets/images/banner-1.jpg" alt="banner-1" className='w-full rounded-xl mb-4' />
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between align-items-center">
                            <h5 className='font-bold text-xl'>Produk Baru</h5>
                            <button className="text-sm text-teal-500 hover:text-teal-600">Lihat Detail  <i className="bx bx-fw bx-right-arrow-alt"></i></button>
                        </div>
                        <div className="grid grid-cols-6 gap-3">
                        {(() => {
                            const items = [];
                            for (let index = 1; index <= 6; index++) {
                            items.push(
                                <div key={index} className="card-product bg-white border rounded-md">
                                <img src="/assets/images/product.jpg" alt="banner-1" className='w-full rounded-lg' />
                                <div className="px-3 py-2 flex flex-col gap-1">
                                    <p className="text-md font-bold text-orange-300">4.300.000</p>
                                    <p className="font-medium text-sm">Nama Produk Laptop</p>
                                    <p className="text-xs text-gray-400">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, deserunt...
                                    </p>
                                    <div className="flex flex-row justify-between items-center">
                                        <button className='bg-teal-500 hover:bg-teal-600 text-white text-xs p-2 rounded-md mb-2'><i className="bx bx-fw bx-shopping-bag"></i> Checkout</button>
                                        <i className="bx bx-fw bx-heart text-gray-300"></i>
                                    </div>
                                    
                                </div>
                                </div>
                            );
                            }
                            return items;
                        })()}
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
