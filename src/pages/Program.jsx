import { useRef, useState } from "react";
import { PageHeading } from "../components/Layout";
import {
  days,
  programAnnouncement,
  speakerById,
  timeSlots,
} from "../data/program";
import Icon from "../components/Icon";
import MathText from "../components/MathText";
const speakerFor = (event) => speakerById[event?.speaker];
const talkId = (day, index) => `${day.id}-talk-${index}`;

function highlightTalk(target, reducedMotion) {
  // Restart the feedback even when the same talk is selected again.
  target.getAnimations().forEach((animation) => {
    if (animation.id === "talk-highlight") animation.cancel();
  });
  const highlight = {
    backgroundColor: "var(--color-selection)",
    boxShadow: "inset 4px 0 var(--color-accent)",
  };
  target.animate(
    [
      { ...highlight, offset: 0 },
      { ...highlight, offset: 0.5 },
      {
        backgroundColor: "transparent",
        boxShadow: "inset 4px 0 transparent",
        offset: 1,
      },
    ],
    {
      id: "talk-highlight",
      duration: reducedMotion ? 2000 : 3000,
      // With reduced motion, hold a static highlight and then clear it.
      easing: reducedMotion ? "steps(1, end)" : "ease-out",
    },
  );
}

function ScheduleEvent({ event, day, index }) {
  if (!event)
    return (
      <span className="empty-event" aria-label="No scheduled event">
        —
      </span>
    );
  const speaker = speakerFor(event);
  const content = (
    <>
      <span>{event.label}</span>
      {(speaker || event.presenter) && (
        <span className="schedule-speaker">
          {speaker?.name || event.presenter}
        </span>
      )}
      <span className="schedule-room">({event.room})</span>
    </>
  );
  if (!event.abstract) return <div className="schedule-event">{content}</div>;
  const reveal = () => {
    const target = document.getElementById(talkId(day, index));
    if (target) {
      target.open = true;
      target.closest(".program-day").open = true;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reducedMotion ? "instant" : "smooth",
        block: "center",
      });
      target.querySelector("summary").focus({ preventScroll: true });
      highlightTalk(target, reducedMotion);
    }
  };
  return (
    <div className="event-wrap">
      <button
        className="schedule-event event-button"
        type="button"
        onClick={reveal}
        aria-controls={talkId(day, index)}
        aria-label={`${event.title}, ${day.name}, ${timeSlots[index]}. View abstract`}
      >
        {content}
        <Icon className="mobile-event-arrow" />
      </button>
      <button
        className="event-preview"
        type="button"
        onClick={reveal}
        aria-label={`Read abstract: ${event.title}`}
        aria-controls={talkId(day, index)}
      >
        <strong>{event.title}</strong>
        {speaker && (
          <span>
            {speaker.name} ({speaker.affiliation})
          </span>
        )}
        <span className="preview-abstract">
          <MathText>{event.abstract}</MathText>
        </span>
        <span className="preview-hint">
          Read abstract <Icon />
        </span>
      </button>
    </div>
  );
}
function Talk({ event, day, index }) {
  const speaker = speakerFor(event);
  return (
    <details className="talk" id={talkId(day, index)}>
      <summary>
        <time>{timeSlots[index].slice(0, 5)}</time>
        <span className="talk-title">{event.title}</span>
        <span className="talk-speaker">{speaker?.name || event.presenter}</span>
        <span className="talk-affiliation">{speaker?.affiliation}</span>
        <span className="talk-room">{event.room}</span>
        <span className="expand-mark" aria-hidden="true" />
      </summary>
      <div className="talk-body">
        <p className="mobile-presenter">
          {speaker
            ? `${speaker.name} (${speaker.affiliation})`
            : event.presenter}
        </p>
        <p>
          <span className="abstract-label">Abstract: </span>
          <MathText>{event.abstract}</MathText>
        </p>
        <p className="mobile-room">Venue: {event.room}</p>
      </div>
    </details>
  );
}
export default function Program() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [view, setView] = useState("day");
  const detailedProgram = useRef(null);
  const setAllDaysOpen = (open) => {
    detailedProgram.current.querySelectorAll(".program-day").forEach((day) => {
      day.open = open;
    });
  };
  const selected = days[selectedDay];
  const changeTab = (e, index) => {
    let next;
    if (e.key === "ArrowRight") next = (index + 1) % days.length;
    if (e.key === "ArrowLeft") next = (index + days.length - 1) % days.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = days.length - 1;
    if (next !== undefined) {
      e.preventDefault();
      setSelectedDay(next);
      document.getElementById(`tab-${days[next].id}`).focus();
    }
  };
  if (days.length === 0) {
    return (
      <>
        <PageHeading page="program" />
        <div className="program-content wide">
          <p className="program-announcement">{programAnnouncement}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <PageHeading page="program" />
      <div className="program-content wide">
        <section
          className={`week-section view-${view}`}
          aria-labelledby="week-title"
        >
          <div className="section-heading-row">
            <h2 className="eyebrow" id="week-title">
              Week at a glance
            </h2>
            <label className="view-select">
              <span className="sr-only">Schedule display</span>
              <select value={view} onChange={(e) => setView(e.target.value)}>
                <option value="day">View by day</option>
                <option value="week">View full week</option>
              </select>
            </label>
          </div>
          <div
            className="week-table-scroll"
            tabIndex={view === "week" ? 0 : undefined}
            aria-label="Weekly schedule"
          >
            <table className="week-table">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  {days.map((day) => (
                    <th key={day.id} scope="col">
                      {day.short}, Dec {day.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, index) => (
                  <tr key={slot}>
                    <th scope="row">{slot}</th>
                    {days.map((day) => (
                      <td key={day.id}>
                        <ScheduleEvent
                          event={day.events[index]}
                          day={day}
                          index={index}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mobile-schedule">
            <div
              className="day-tabs"
              role="tablist"
              aria-label="Conference days"
            >
              {days.map((day, index) => (
                <button
                  key={day.id}
                  id={`tab-${day.id}`}
                  role="tab"
                  aria-selected={selectedDay === index}
                  aria-controls="day-schedule"
                  tabIndex={selectedDay === index ? 0 : -1}
                  onKeyDown={(e) => changeTab(e, index)}
                  onClick={() => setSelectedDay(index)}
                >
                  {day.short}
                  <span>Dec {day.day}</span>
                </button>
              ))}
            </div>
            <div
              id="day-schedule"
              role="tabpanel"
              aria-labelledby={`tab-${selected.id}`}
              tabIndex="0"
            >
              {timeSlots.map((slot, index) => (
                <div className="mobile-slot" key={slot}>
                  <time>{slot}</time>
                  <ScheduleEvent
                    event={selected.events[index]}
                    day={selected}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="detailed-program"
          aria-labelledby="detailed-title"
          ref={detailedProgram}
        >
          <div className="section-heading-row program-details-heading">
            <h2 className="eyebrow" id="detailed-title">
              Detailed program
            </h2>
            <div
              className="day-controls"
              role="group"
              aria-label="Program days"
            >
              <button
                type="button"
                onClick={() => setAllDaysOpen(true)}
                aria-controls={days.map((day) => `program-${day.id}`).join(" ")}
              >
                Expand all days
              </button>
              <button
                type="button"
                onClick={() => setAllDaysOpen(false)}
                aria-controls={days.map((day) => `program-${day.id}`).join(" ")}
              >
                Collapse all days
              </button>
            </div>
          </div>
          {days.map((day) => (
            <details
              className="program-day"
              key={day.id}
              id={`program-${day.id}`}
              open
            >
              <summary>
                <h3>{day.name}</h3>
                <span>{day.date}</span>
                <Icon name="chevron" />
              </summary>
              <div className="day-talks">
                {day.events.map(
                  (event, i) =>
                    event?.abstract && (
                      <Talk key={i} event={event} day={day} index={i} />
                    ),
                )}
              </div>
            </details>
          ))}
        </section>
      </div>
    </>
  );
}
