import EventTabs from "~/components/pages/dashboard/event-tabs";

const Events = () => {
    return (
        <div className="events">
            <div className="p-3">
                <h5 className="heading text-basic mb-0">Events</h5>
            </div>
            <div className="divider2"></div>
            <EventTabs />
        </div>
    )
};

export default Events;
