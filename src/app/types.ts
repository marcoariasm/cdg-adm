export interface Meeting {
    id:                           string;
    meetingSeriesId:              string;
    meetingNumber:                string;
    title:                        string;
    agenda:                       string;
    password:                     string;
    phoneAndVideoSystemPassword:  string;
    meetingType:                  string;
    state:                        string;
    hostDidJoin:                  boolean;
    attendeeDidJoin:              boolean;
    isModified:                   boolean;
    timezone:                     string;
    start:                        Date;
    end:                          Date;
    hostUserId:                   string;
    hostDisplayName:              string;
    hostEmail:                    string;
    hostKey:                      string;
    siteUrl:                      string;
    webLink:                      string;
    sipAddress:                   string;
    dialInIpAddress:              string;
    enabledAutoRecordMeeting:     boolean;
    allowAnyUserToBeCoHost:       boolean;
    allowFirstUserToBeCoHost:     boolean;
    allowAuthenticatedDevices:    boolean;
    enabledJoinBeforeHost:        boolean;
    joinBeforeHostMinutes:        number;
    enableConnectAudioBeforeHost: boolean;
    excludePassword:              boolean;
    publicMeeting:                boolean;
    reminderTime:                 number;
    enableAutomaticLock:          boolean;
    unlockedMeetingJoinSecurity:  string;
    meetingOptions:               MeetingOptions;
    attendeePrivileges:           { [key: string]: boolean };
    sessionTypeId:                number;
    scheduledType:                string;
    simultaneousInterpretation:   SimultaneousInterpretation;
    enabledAudioWatermark:        boolean;
    enabledVisualWatermark:       boolean;
    audioConnectionOptions:       AudioConnectionOptions;
    enabledLiveStream:            boolean;
}

export interface AudioConnectionOptions {
    audioConnectionType:       string;
    enabledTollFreeCallIn:     boolean;
    enabledGlobalCallIn:       boolean;
    enabledAudienceCallBack:   boolean;
    entryAndExitTone:          string;
    allowAttendeeToUnmuteSelf: boolean;
    muteAttendeeUponEntry:     boolean;
}

export interface MeetingOptions {
    enabledChat:         boolean;
    enabledVideo:        boolean;
    enabledFileTransfer: boolean;
}

export interface SimultaneousInterpretation {
    enabled: boolean;
}



export interface Participant {
    id:               string;
    host:             boolean;
    coHost:           boolean;
    spaceModerator:   boolean;
    email:            string;
    displayName:      string;
    invitee:          boolean;
    muted:            boolean;
    state:            string;
    joinedTime:       Date;
    leftTime:         Date;
    siteUrl:          string;
    meetingId:        string;
    hostEmail:        string;
    meetingStartTime: Date;
    devices:          Device[];
}

export interface Device {
    correlationId:  string;
    deviceType:     string;
    joinedTime:     Date;
    leftTime:       Date;
    durationSecond: number;
}
