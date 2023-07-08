"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { UserContext } from "../../utils/Context/UserContext";
import DashboardLayout from "@/components/dashboard/Dashboard";
export default function Settings() {
    const { user, loading } = useContext(UserContext);
    return (
        <DashboardLayout>
            <div className="flex flex-wrap justify-center items-center">
                <form>
                    <div className="bg-white dark:bg-[#27272a] px-10 py-10 border dark:border-gray-700 shadow-sm rounded-md">
                        <div className="border-b border-gray-900/10 pb-8">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">
                                Settings
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                Apply settings for a better experience.
                            </p>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                Notifications
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                We'll always let you know about important changes, but you can pick what else you want to hear about.
                            </p>

                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                        By Email
                                    </legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-900 dark:text-white">
                                                    Views
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when someone views your shared card.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="font-medium text-gray-900 dark:text-white">
                                                    Shares
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when a someone shares you a card.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="font-medium text-gray-900 dark:text-white">
                                                    Offers
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when cardova sends an offer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                        Push Notifications
                                    </legend>
                                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                        These are delivered via SMS to your mobile phone.
                                    </p>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-everything"
                                                name="push-notifications"
                                                type="radio"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                                htmlFor="push-everything"
                                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                                            >
                                                Everything
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-email"
                                                name="push-notifications"
                                                type="radio"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                                htmlFor="push-email"
                                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                                            >
                                                Same as email
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-nothing"
                                                name="push-notifications"
                                                type="radio"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                                htmlFor="push-nothing"
                                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                                            >
                                                No push notifications
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </DashboardLayout>

    );
}
